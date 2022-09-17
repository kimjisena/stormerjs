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

At a high level, Stormer is a pure function which takes the current state of the canvas and some actions to produce the next state. It is a reducer.

`(state, action) => state`

Stormer doesn't mutate the state of the canvas, but it creates a new state entirely. Given the same state and actions, Stormer always produces the same result.

A typical Stormer application has `Root`, several `Layer`s and `Element`s. Understanding these concepts will make it simple and fun to use Stormer.

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
The Canvas coordinate system has it's origin at the top left corner of the canvas element. The x-axis is just like in the Cartesian coordinate system, but the y-axis is flipped (larger values are further down the canvas). It's important to understand the coordinate system especially when moving objects around on the canvas.

#### The Canvas API
The Canvas API exposes useful methods for working with the Canvas context. There are methods for drawing paths, primitive 2D shapes, text and images. The styling of these objects is controlled by using context settings such as fill and stroke styles. In addition, there are transforms which allow moving, scaling and rotating objects on the canvas.

Again, I recommend consulting the Mozilla Developer's Network for further details and API reference.

And now, let's see what Stormer brings to the table.
### Elements

### Layers
### Root
### When To Render
### Integrating With UI Libraries
## API Reference
