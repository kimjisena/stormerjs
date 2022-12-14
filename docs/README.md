# Stormer Documentation
Stormer is a JavaScript library built around the Canvas API. Stormer enables a declarative workflow when working with 2D graphics on the browser.

Stormer tries to reduce the boilerplate and code duplication that arises when working with the Canvas API by automatically handling clean ups and flushing changes to the screen in an orderly manner. It does so without getting in the way. In addition, Stormer implements the concept of layers which is a common thing when working with bitmaps.

This document assumes some familiarity with the Canvas API. If that's not the case, I recommend consulting Mozilla Developer's Network, it's quite resourceful.

## Installation
Stormer is available on the npm registry. You can install Stormer using the package manager of your choice.

### Using `npm`

- `$ npm i stormerjs`

### Using `yarn`

- `$ yarn add stormerjs`

## Main Concepts
The Canvas API brings proper graphics to the web. It's now possible to develop immersive applications with JavaScript which are just as performant as native applications.

Stormer builds on top of the Canvas API to make it developer-friendly to build these applications. 

At a high level, Stormer is a pure function that takes the current state of the canvas and some actions to produce the next state. It is a reducer.

`(state, action) => state`

Stormer doesn't mutate the state of the canvas, but it creates a new state entirely. Given the same state and actions, Stormer always produces the same result.

A typical Stormer application has a `Root`, several `Layer`s and `Element`s. Understanding these concepts will make it simple and fun to use Stormer.

But first, a quick overview of the canvas element.
### `HTMLCanvasElement`
The `HTMLCanvasElement` is our interface to bitmap graphics. It is a regular element in the sense that it can be styled by using CSS. The main difference is that objects drawn on the Canvas are not HTML elements, so CSS doesn't apply to them.

The `HTMLCanvasElement` provides a drawing context on which raw pixel data can be flushed.
```js
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d'); // contexts: '2d', 'webgl', 'webgl2', 'bitmaprenderer'
```
There are several types of contexts depending on what one wants to achieve. Stormer uses the 2D context to support 2D drawings and animations (though that could change in the future).

#### The Canvas Coordinate System
The Canvas coordinate system has it's origin at the top left corner of the canvas element. The $x- axis$ is just like in the Cartesian coordinate system, but the $y-axis$ is flipped (larger values are further down the canvas). It's important to understand the coordinate system especially when moving objects around on the canvas.

#### The Canvas API
The Canvas API exposes useful methods for working with the Canvas context. There are methods for drawing paths, primitive 2D shapes, text and images. The styling of these objects is controlled by using context settings such as fill and stroke styles. In addition, there are transforms which allow moving, scaling and rotating objects on the canvas.

Again, I recommend consulting the Mozilla Developer's Network for further details and API reference.

And now, let's see what Stormer brings to the table.

### `Stormer.Element`
Stormer elements are primitives that can be combined in different ways to produce graphics of varying complexity. Stormer has nine 2D primitive elements: `Point`, `Line`, `Arc`, `Circle`, `Ellipse`, `Rectangle`, `Triangle`, `Curve` and `Bezier`. In addition to those, there are two elements for drawing text and images respectively: `Text` and `Image`.

Each element above has a factory method that is exposed by the `Stormer` object.
```js
import Stormer from 'stormerjs';
```
The factory methods have the name of the element prefixed with `create`. So, a method for creating a `Circle` is named `Stormer.createCircle`.

For example the code,
```js
const circle = Stormer.createCircle(50, 50, 100);
```
tells Stormer that we intend to create a circle centered $50px$ from the left and $50px$ from top of the canvas, with a radius of $100px$.

Factory methods return an instance of the element that we can further use to tell Stormer about that element.

For instance, each element implements `Element.props` and `Element.transforms` attributes. These attributes allow us to specify styles and transformations that apply to a single element.

Proceeding from our circle above, the code
```js
circle.props
  .strokeStyle('blue')
  .lineWidth(4);
```
tells Stormer to stroke our circle blue and set the line width to $4px$. There are more properties exposed as methods of the `Props` object and we can chain them like that. Read the API reference for full description of these methods.

The most important thing to note here is props and transforms applied to an element only affect that element. When drawing a new element, one can always assume that the canvas is in it's initial state.

For instance, let's say we decide to translate the origin point for our circle, like so:
```js
circle.transforms
  .translate(20, 0); 
```
The code above tells Stormer to move the origin of our Canvas coordinate system to the right by $20px$ i.e. from $(0, 0)$ to $(20, 0)$. Our circle will now be drawn relative to this new origin.

Then we decide to add another element,
```js
const rect = Stormer.createRectangle(10, 10, 100, 100);

rect.props
  .fillStyle('red')
  .shouldFill(true);
```

A $100px\text{ by }100px$ rectangle (square) with it's top-left corner $10px$ from the left and $10px$ from the top of the canvas. This element will be drawn relative to the origin at $(0, 0)$.

We further instruct Stormer to fill our rectangle red. The `shouldFill()` method ensures our rectangle is filled even if it is a component in a layer whose style is stroke. We will see shortly what a layer is. 

In Stormer, all elements are stroked by default (except `Image`s which do not need filling or stroking).

On to layers.

### `Stormer.Layer`
A layer is a collection of at least one element. In fact, Stormer requires grouping elements into layers. Element instances expose `Element.attachTo()` method which takes a layer instance as an argument to which the element will be attached.

Continuing from above, here is how we create a layer and attach our elements to it.
```js
const layerOne = Stormer.createLayer();

circle.attachTo(layerOne);
rect.attachTo(layerOne);
```
It is important to note that detached elements will not be rendered in Stormer.

One can create as many layers as needed. Layers expose `Layer.props` and `Layer.transforms` attributes that allow setting properties and transformations that apply to all elements attached to the layer.

For instance, let's say all elements on `layerOne` are going to have a line width of $4px$. Instead of setting this prop on each element (which could be hundreds of elements), we set the prop on the layer.
```js
layerOne.props
  .lineWidth(4);
```
Now `circle` and `rect` will have a line width of $4px$. Just like in elements, Stormer guarantees that props and transforms applied to one layer do not affect other layers.

In addition to grouping elements together, layers provide a stacking context in which layers created last will be rendered on top of other layers. Also, layers are pre-rendered. This means asynchronous sources of pixel data like images will be rendered on the correct layer and in the correct order.

### `Stormer.Root`
When elements and layers are created, Stormer doesn't render them immediately. In fact, creating elements is like telling Stormer we intend to render that element, but we may not render it. 

To commit our intentions to render, we call `Root.render()`. The `Stormer` object exposes a `Stormer.createRoot()` method that we use to create our root. This method takes one required argument, which is an `id` of our canvas element. In addition, `Stormer.createRoot()` takes two optional arguments that specify the size of our canvas.

In the code snippet below, we create a root and call `render()` on it (We proceed from above).
```js
const root = Stormer.createRoot('mycanvas');

root.render();
```
The above code will render our `circle` and `rect` elements on `layerOne`, with the styles and transforms we specified.

You can think of `Root` as a Stormer representation of the canvas element. Whenever we update or create new "intentations", we have to call the `render()` method. We can call this method as many times as we'd like to update our rendered graphics.

### When To Render
Each call to `Root.render()` is in effect a commit. It is unlikely that one will call this method only onece. Stormer gives the developer the liberty to render at will. Whenever you feel like you are ready to commit your intentations, call render. This is so convenient especially when animating objects using a `requestAnimationFrame()` callback.

## API Reference
The `Stormer` object exposes factory methods for creating root, elements and layers as documented below. This object has everything one needs to interact with the Stormer library.

```js
import Stormer from "stormer";
```

### `Stormer.Root`
#### **Factory**
`Stormer.createRoot(id: string, w?: number, h?: number): Root`

- `id` - The `id` of the target canvas element.
- `w` - Optional width of the canvas element. Defaults to 300.
- `h` - Optional height of the canvas element. Defaults to 150.
- Returns an instance of `Root`, a wrapper over the canvas element.

Example:
```js
const root = Stormer.createRoot('mycanvas', 300, 300);
```
#### **Methods**
`render (): Root`

- The `render()` method of the `Root` instance renders all elements that have been created before it was called. It returns the `Root` instance.

Example:
```js
// create some elements and layers here

root.render();

// create (or remove) some more elements

root.render();
```

`unstable_GetUnderlyingContext (): CanvasRenderingContext2D`

- The `unstable_GetUnderlyingContext()` method of the `Root` instance returns the underlying 2D context. This is useful for stuff like text metrics and image data.
- The method is marked `unstable` because it could be changed in the near future. One doesn't necessarily need to access the context directly to get the image data.
- Don't use this method to draw on the canvas directly because the resulting render will be unpredictable.
- In addition, avoid drawing text on the canvas if you can help it. You can use HTML for that.

Example:
```js
const ctx = root.unstable_GetUnderlyingContext();

// get image data of the whole canvas
const imgData = ctx.getImageData(0, 0, 300, 300).data;

// get text metrics
const txtMetrics = ctx.measureText('Hello, Canvas!');
```

### `Props`
A `Props` instance is created whenever an element or a layer is created. We get access to the `Props` instance by accessing the `props` attribute on an element or a layer. The `Props` object exposes methods for styling and transforming the canvas context.

These methods are named after the properties of the underlying `CanvasRenderingContext2DSettings` object (except for `shouldFill()`) and for that reason, most of the content in this section has been copied over from Mozilla Developer's Network.

All methods of the `Props` object return the `Props` instance to enable method chaining.

#### **Methods**
`shouldFill (value: boolean): Props`
- `value` - `true` if Stormer should fill the element. Defaults to `false`.
- The `shouldFill()` method is used to tell Stormer to fill a particular element even if it is in a layer whose styling is stroke. By default, Stormer strokes all elements.

Example:
```js
// a `circle` element that we want it to be filled
circle.props
  .shouldFill(true);
```

`direction (value: string): Props`
Specifies the current text direction used to draw text.
- `value` - `"ltr"` | `"rtl"` | `"inherit"`. Defaults to `"inherit"`

`fillStyle (value: string): Props`
- Color or style to use inside shapes.
- Default `#000` (black).

`filter (value: string): Props`
- Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or blurriness.

`font (value: string): Props`
- Font setting. Default value `"10px sans-serif"`.

`fontKerning (value: string): Props`
- Font kerning. 
- Possible values: `"auto"` (default), `"normal"`, `"none".

`fontStretch (value: string): Props`
- Font stretch. 
- Possible values: `"ultra-condensed"`, `"extra-condensed"`, `"condensed"`, `"semi-condensed"`, `"normal"` (default), `"semi-expanded"`, `"expanded"`, `"extra-expanded"`, `"ultra-expanded"`.

`fontVariantCaps (value: string): Props`
- Font variant caps. 
- Possible values: `"normal"` (default), `"small-caps"`, `"all-small-caps"`, `"petite-caps"`, `"all-petite-caps"`, `"unicase"`, `"titling-caps"`.

`globalAlpha (value: number): Props`
- Alpha value that is applied to shapes and images before they are composited onto the canvas. 
- Default 1.0 (opaque).

`globalCompositeOperation (value: string): Props`
- With globalAlpha applied this sets how shapes and images are drawn onto the existing bitmap.

`imageSmoothingEnabled (value: boolean): Props`
Image smoothing mode; if disabled, images will not be smoothed if scaled.

`imageSmoothingQuality (value: string): Props`
Allows you to set the quality of image smoothing.

`letterSpacing (value: string): Props`
- Letter spacing. 
- Default: `"0px"`.

`lineCap (value: string): Props`
- Type of endings on the end of lines. 
- Possible values: `"butt"` (default), `"round"`, `"square"`.

`lineDashOffset (value: number): Props`
- Specifies where to start a dash array on a line.

`lineJoin (value: string): Props`
- Defines the type of corners where two lines meet. 
- Possible values: `"round"`, `"bevel"`, `"miter"` (default).

`lineWidth (value: number): Props`
- Width of lines. 
- Default 1.0.

`miterLimit (value: number): Props`
- Miter limit ratio. 
- Default 10.

`shadowBlur (value: number): Props`
- Specifies the blurring effect. 
- Default: 0.

`shadowColor (value: string): Props`
- Color of the shadow. 
- Default: fully-transparent black.

`shadowOffsetX (value: number): Props`
- Horizontal distance the shadow will be offset.
- Default: 0.

`shadowOffsetY (value: number): Props`
- Vertical distance the shadow will be offset.
- Default: 0.

`strokeStyle (value: string): Props`
- Color or style to use for the lines around shapes. 
- Default `#000` (black).

`textAlign (value: string): Props`
- Text alignment setting.

- Possible values: `"start"` (default), `"end"`, `"left"`, `"right"`, `"center"`.

`textBaseline (value: string): Props`
- Baseline alignment setting.

- Possible values: `"top"`, `"hanging"`, `"middle"`, `"alphabetic"` (default), `"ideographic"`, `"bottom"`.

`textRendering (value: string): Props`
- Text rendering. 
- Possible values: `"auto"` (default), `"optimizeSpeed"`, `"optimizeLegibility"`, `"geometricPrecision"`.

`wordSpacing (value: string): Props`
- Word spacing. 
- Default value: `0px`

See [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) for a complete coverage of these properties (and more).

### `Transforms`
Just like the `Props` object, each element and layer gets an instance of the `Transforms` object upon creation. The `Transforms` object exposes methods for performing transformations on the canvas element.

To get access to the `Transforms` instance, we access the `transforms` attribute on an element or layer. Method calls on the `Transforms` object can be chained, just like `Props` method calls.

#### **Methods**
`translate (x: number, y: number): Transforms`
- `x` - Units to translate the origin by, horizontally.
- `y` - Units to translate the origin by, vertically.
- Returns the same instance of the `Transforms` object.
- This method is used to move the origin of the Canvas coordinate system.

Example:
```js
// say we want a `rect` element to be drawn relative to a new origin (10, 15)

rect.transforms
  .translate(10, 15);
```

`rotate (angle: number): Transforms`
- `angle` - Angle (in degrees) by which to rotate the Canvas coordinate system about the origin.
- Returns the same instance of the `Transforms` object.
- This method is used to rotate the Canvas coordinate system so that objects appear to be inclined at an angle.

Example:
```js
// say we want a `rect` element to be drawn at 45 degrees
rect.transforms
  .rotate(45);
```

`scale (x: number, y: number): Transforms`
- `x` - Units to scale the coordinate system by, horizontally.
- `y` - Units to scale the coordinate system by, vertically.
- Returns the same instance of the `Transforms` object.
- Negative values flip the coordinate system and values less than 1 scale down.

Example:
```js
// say we want to use the familiar Cartesian coordinate system to draw a `rect` element
rect.transforms
  .translate(0, 300) // move the origin to the bottom of the canvas
  .scale(1, -1); // then flip the y-axis so that values increase going up
```

### `Stormer.Layer`
#### **Factory**
`Stormer.createLayer (): Layer`
- The `createLayer()` method of the `Stormer` object returns a layer instance.

Example:
```js
const layerOne = Stormer.createLayer();
```

#### **Properties**
`props: Props` 
- A `Props` instance used to set properties to be applied to all elements attached to a given layer.

Example:
```js
layerOne.props
  .strokeStyle('red');
```
For information about methods available on the `Props` object, read the [`Props`](#props) section above.

`transforms: Transforms`
- A `Transforms` instance used to set transformations to be applied to all elements attached to a given layer.

Example:

The code below causes the origin to be moved to $(10, 20)$ for all elements on `layerOne`.
```js
layerOne.transforms
  .translate(10, 20);
```
For information about methods available on the `Transforms` object, read the [`Transforms`](#transforms) section above.

**Note:** `props` and `transforms` that are set on an element take precedence over `props` and `transforms` set on a layer. Think cascades.

#### **Methods**
`addElement (element: Element): Layer`
- `element` - An element instance to be added to the layer.
- Returns the layer instance to allow method call chaining.

**Note:** Alternatively, you can add an element to a layer by using the `attachTo()` method of the element, passing layer as an argument. See [`Element`](#stormerelement-1) section below.

Example:

The code below adds `rect` and `circle` elements to `layerOne`
```js
layerOne
  .addElement(rect)
  .addElement(circle);
```

`removeElement (element: Element): Layer`
- `element` - An element instance to be removed from the layer.
- Returns the layer instance to allow method call chaining.

Example:

The code below removes a `circle` element from `layerOne`
```js
layerOne.removeElement(circle);
```
`clearLayer (): Layer`
- Removes all elements on this layer and returns the layer instance.

Example:

The code below removes all elements previously added to `layerOne`
```js
layerOne.clearLayer();
```

### `Stormer.Element`
#### **Factory**
`Stormer.createPoint (x: number, y: number): Point`
- `x` - x-axis coordinate of the point.
- `y` - y-axis coordinate of the point.
- Returns a new point instance.

`Stormer.createLine (...coords: number[]): Line`
- `coords` - A list of coordinate pairs.
- Returns a new line instance.

`Stormer.createRectangle (x: number, y: number, width: number, height: number): Rectangle`
- `x` - x-axis coordinate of the top-left corner of the rectangle.
- `y` - y-axis coordinate of the top-left corner of the rectangle.
- `width` - Width of the rectangle element.
- `height` - Height of the rectangle element.
- Returns a new rectangle instance.

`Stormer.createTriangle(...coords: number[]): Triangle`
- `coords` - A list of 3 coordinate pairs.
- Returns a new triangle instance.

`Stormer.createCircle (x: number, y: number, rad: number): Circle`
- `x` - x-axis coordinate of the center of the circle.
- `y` - y-axis coordinate of the center of the circle.
- `rad` - Radius of the circle.
- Returns a new circle instance.

`Stormer.createArc (x: number, y: number, rad: number, startAngle: number, endAngle: number, counterclockwise?: boolean): Arc`
- `x` - x-axis coordinate of the center of the circle forming the arc.
- `y` - y-axis coordinate of the center of the circle forming the arc.
- `rad` - Radius of the circle forming the arc.
- `startAngle` - Angle in degrees from where to start the arc.
- `endAngle` - Angle in degrees to which the arc ends.
- `counterclockwise` - Direction for measuring angles (Optional). Defaults to `false`.
- Returns a new arc instance.

`Stormer.createEllipse (x: number, y: number, width: number, height: number): Ellipse`
- `x` - x-axis coordinate of the top-left corner of the bounding rectangle.
- `y` - y-axis coordinate of the top-left corner of the bounding rectangle.
- `width` - Width of the bounding rectangle.
- `height` - Height of the bounding rectangle.
- Returns a new Ellipse instance.

`Stormer.createCurve (anchorX: number, anchorY: number, fromX: number, fromY: number, toX: number, toY: number): Curve`
- `anchorX` - x-axis coordinate of the anchor point.
- `anchorY` - y-axis coordinate of the anchor point.
- `fromX` - x-axis coordinate of the point from which the curve should be drawn.
- `fromY` - y-axis coordinate of the point from which the curve should be drawn.
- `toX` - x-axis coordinate of the point to which the curve should be drawn.
- `toY` - y-axis coordinate of the point to which the curve should be drawn.
- Returns a new quadratic curve instance.

`Stormer.createBezier (anchorOneX: number, anchorOneY: number, anchorTwoX: number, anchorTwoY: number, fromX: number, fromY: number, toX: number, toY: number): Bezier`
- `anchorOneX` - x-axis coordinate of the first anchor point.
- `anchorOneY` - y-axis coordinate of the first anchor point.
- `anchorTwoX` - x-axis coordinate of the second anchor point.
- `anchorTwoY` - y-axis coordinate of the second anchor point.
- `fromX` - x-axis coordinate of the point from which the curve should be drawn.
- `fromY` - y-axis coordinate of the point from which the curve should be drawn.
- `toX` - x-axis coordinate of the point to which the curve should be drawn.
- `toY` - y-axis coordinate of the point to which the curve should be drawn.
- Returns a new cubic bezier curve instance.

`Stormer.createText (text: string, x: number, y: number, maxWidth?: number): Text`
- `text` - A string specifying the text string to render into the context. The text is rendered using the settings specified by `font`, `textAlign`, `textBaseline`, and `direction`.
- `x` - x-axis coordinate of the point at which to begin drawing the text, in pixels.
- `y` - y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
- `maxWidth` - The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text. (Optional)
- Returns a new text element instance.

`Stormer.createImage (url: string,  dx: number,  dy: number): Image`
- `url` - The URL of the image resource.
- `dx` - x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dy` - y-axis coordinate in the destination canvas at which to place the top-left corner of the source image. 
- Returns a new image element instance.

`Stormer.createImage (url: string, dx: number, dy: number, dw: number, dh: number): Image `
- `url` - URL of the image resource.
- `dx` - x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dy` - y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dw` - Width to draw the image in the destination canvas. This allows scaling of the drawn image. 
- `dh` - Height to draw the image in the destination canvas. This allows scaling of the drawn image. 
- Returns a new image element instance.

`Stormer.createImage (url: string, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): Image`
- `url` - URL of the image resource.
- `sx` - x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context. 
- `sy` - y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
- `sw` - Width of the sub-rectangle of the source image to draw into the destination context.
- `sh` - Height of the sub-rectangle of the source image to draw into the destination context.
- `dx` - x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dy` - y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dw` - Width to draw the image in the destination canvas. This allows scaling of the drawn image. 
- `dh` - Height to draw the image in the destination canvas. This allows scaling of the drawn image.
- Returns a new image element instance.

#### **Properties**
`props: Props` 
- A `Props` instance used to set properties to be applied on the element.

Example:
```js
circle.props
  .strokeStyle('red');
```
For information about methods available on the `Props` object, read the [`Props`](#props) section above.

`transforms: Transforms`
- A `Transforms` instance used to set transformations for a given element.

Example:

The code below rotate the the Canvas coordinate system by 45 degrees (clockwise). The rendered `rect` will appear inclined.
```js
rect.transforms
  .rotate(45);
```
For information about methods available on the `Transforms` object, read the [`Transforms`](#transforms) section above.

#### **Methods**
`attachTo (layer: Layer): Element`
- `layer` - A `Layer` instance to which this element should be attached.
- Returns the element instance.

**Note:** As seen in the [Layer](#stormerlayer-1) section above, one could also use the `addElement()` method of the layer instance to attach an element to a layer instance. The difference between these two methods is in what object we're focusing on. 

The `attachTo()` method allows us to focus on the `Element` rather than the layer. Using `attachTo()` instead of `addElement()` is recommended although both methods achieve the same thing.

## Miscellaneous
Since Stormer doesn't touch the DOM, it can be used with any UI library/framework.

### Stormer with React
To use Stormer with React, follow the following steps:

1. Create a React component that renders a canvas element. 

For instance, let's say our file is named `./src/components/Canvas.js`

Function component:
```js
// ./src/components/Canvas.js

export default function Canvas () {
  return (
    <canvas id="mycanvas" />
  );
}
```

Class component:
```js
// ./src/components/Canvas.js

export default class Canvas extends React.Component {
  render () {
    return (
      <canvas id="mycanvas" />
    );
  }
}
```
2. Give Stormer access to the canvas element. 

We have to make sure that React has mounted our `Canvas` component, so we will do this in a `useEffect` hook for our function component. For our class component, we do that in `componentDidMount` method. Then we can start drawing.

Let's say we have a file named `./src/gfx/main.js` that contains our graphics code. The file looks like this:

```js
// ./src/gfx/main.js

import Stormer from "stormerjs";

export default function main (root) {
  const layer = Stormer.createLayer();
  const rect = Stormer.createRect(10, 10, 100, 100);

  rect.props
    .strokeStyle('blue')
    .lineWidth(5);

  root.render();
}
```

All we have to do is import our `main` function into our `Canvas` element and invoke it.

Function component:
```js
// ./src/components/Canvas.js

import { useEffect } from "react";
import Stormer from "stormerjs";
import main from "../gfx/main";

export default function Canvas () {

  useEffect(() => {
    const root = Stormer.createRoot('mycanvas');
    main(root);
  }, []);

  return (
    <canvas id="mycanvas" />
  );
}
```

Class component:
```js
// ./src/components/Canvas.js

import Stormer from "stormerjs";
import main from "../gfx/main";

class Canvas extends React.Component {

  componentDidMount () {
    const root = Stormer.createRoot('mycanvas');
    main(root);
  }

  render () {
    return (
      <canvas id="mycanvas" />
    );
  }
}
```
As a general, use the `useEffect` hook or the `componentDidMount` method when wiring Stormer into React.
