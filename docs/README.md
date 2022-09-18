# Stormer Documentation
Stormer is a JavaScript library built around the Canvas API. Stormer enables a declarative workflow when working with 2D graphics on the browser.

Stormer tries to reduce the boilerplate and code duplication that arises when working with the Canvas API by automatically handling clean ups and flushing changes to the screen in an orderly manner. It does so without getting in the way. In addition, Stormer implements the concept of layers which is a common thing when working with bitmaps.

This document assumes some familiarity with the Canvas API. If that's not the case, I recommend consulting Mozilla Developer's Network, it's quite resourceful.

## Installation
Stormer is available on the npm registry. You can install Stormer using the package manager of your choice.

**Using `npm`**

- `$ npm i stormer`

**Using `yarn`**

- `$ yarn add stormer`
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

Each element above has a factory method that is exposed by the Stormer object.
```js
import Stormer from 'stormer';
```
The factory methods have the name of the element prefixed with `create`. So, a method for creating a `Circle` is named `Stormer.createCircle`.

For example the code,
```js
const circle = Stormer.createCircle(50, 50, 100);
```
tells Stormer that we intend to create a circle centered $50px$ from the left and $50px$ from top of the canvas, with a radius of $100px$.

Factory methods return an instance of the element that we can further use to tell Stormer about that element.

For instance, each element implements `Element.setProps()` and `Element.setTransforms()` methods. These methods allow us to specify styles and transformations that apply to a single element.

Proceeding from our circle above, the code
```js
circle.setProps()
  .strokeStyle('blue')
  .lineWidth(4);
```
tells Stormer to stroke our circle blue and set the line width to $4px$. There are more properties exposed as methods of the `Props` object and we can chain them like that. Read the API reference for full description of these methods.

The most important thing to note here is props and transforms applied to an element only affect that element. When drawing a new element, one can always assume that the canvas is in it's initial state.

For instance, let's say we decide to translate the origin point for our circle, like so:
```js
circle.setTransforms()
  .translate(20, 0); 
```
The code above tells Stormer to move the origin of our Canvas coordinate system to the right by $20px$ i.e. from $(0, 0)$ to $(20, 0)$. Our circle will now be drawn relative to this new origin.

Then we decide to add another element,
```js
const rect = Stormer.createRectangle(10, 10, 100, 100);

rect.setProps()
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

One can create as many layers as needed. Layers expose `Layer.setProps()` and `Layer.setTransforms()` methods that allow setting properties and transformations that apply to all elements attached to the layer.

For instance, let's say all elements on `layerOne` are going to have a line width of $4px$. Instead of setting this prop on each element (which could be hundreds of elements), we set the prop on the layer.
```js
layerOne.setProps()
  .lineWidth(4);
```
Now `circle` and `rect` will have a line width of $4px$. Just like in elements, Stormer guarantees that props and transforms applied to one layer do not affect other layers.

In addition to grouping elements together, layers provide a stacking context in which layers created last will be rendered on top of other layers. Also, layers are pre-rendered. This means asynchronous sources of pixel data like images will be rendered on the correct layer and in the correct order.

### `Stormer.Root`
When elements and layers are created, Stormer doesn't render them immediately. In fact, creating elements is like telling Stormer we intend to render that element, but we may not render it. 

To commit our intentions to render, we call `Root.render()`. The Stormer object exposes a `Stormer.createRoot()` method that we use to create our root. This method takes one required argument, which is an `id` of our canvas element. In addition, `Stormer.createRoot()` takes two optional arguments that specify the size of our canvas.

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
## Miscellaneous
### Stormer with React
