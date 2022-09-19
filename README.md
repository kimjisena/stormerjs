# Stormer - Declarative 2D drawing and animation
## About Stormer
Stormer (named after *Loki Stormbringer*, a character in Dan Suarez's *Daemon* series) is a JavaScript library that wraps over the HTML5 Canvas API. It enables declarative drawing by recording "intents" and replaying them later. Stormer currently supports 2D drawing and animation.

## Quick start
You can install Stormer using the package manager of your choice.

**Using `npm`**

- `$ npm i stormer`

**Using `yarn`**

- `$ yarn add stormer`

And here is how Stormer code looks like,
```js
import Stormer from "stormer";

// give Stormer access to the canvas element
const root = Stormer.createRoot('mycanvas');

// tell Stormer you want 2 layers
const layerOne = Stormer.createLayer();
const layerTwo = Stormer.createLayer();

// tell Stormer to create a rectangle, style it and attach it to layerOne
const rectOne = Stormer.createRectangle(
    0, 60,
    100, 100
    ).attachTo(layerOne);

rectOne.props
  .fillStyle('violet')
  .shouldFill(true);

// tell Stormer to create another rectangle, style it and attach it to layerTwo
const rectTwo = Stormer.createRectangle(
    120, 60,
    100, 100
    ).attachTo(layerTwo);

rectTwo.props()
  .fillStyle('orange')
  .shouldFill(true);

// Finally, tell Stormer to render whenever you feel like it
root.render();
```
And that's it! When you call `root.render()`, Stormer will handle the rest and deliver two styled rectangles to your canvas.

## Features

While the above example code might seem like a lot just to draw two rectangles, Stormer gives one the ability to concetrate on _what_ they are creating rather than on _how_ they are creating it. The author of Stormer believes tools should never get in the way of creativity.

Here are some features of Stormer that you might like:

1. **Elements** - Stormer comes built in with primitives for drawing shapes, text and images. A Stormer element behaves as if it is the only element on the canvas. This means one can apply properties and transforms without affecting other elements.

2. **Layers** - A Stormer abstraction that allows grouping of elements. One thing you can do with a layer is animate it, or apply properties to all elements in a layer. Stormer guarantees changes applied to one layer will not affect other layers.

3. **Declarative API** - Due to it's declarative nature, Stormer code is easy to reason with and understand. One can follow through the code and see what they did. Stormer code is easy to debug.

4. **Easy to Learn** - The structure of Stormer code should be familiar to any JavaScript developer. Stormer's API relies heavily on method chaining, jQuery style.

## Using with UI Libaries
Stormer is a canvas library in the sense that React is a UI library. This means, React handles the UI while Stormer handles the canvas.

Stormer should work with any UI library/framework. Consult the [docs](./docs/) for further information.

## Documentation
For those who want a hands-on approach, I encourage you to browse the [examples](./examples/) directory.

For full Stormer documentation and API reference, click [here](./docs/)

The author of Stormer barely comments his code, though he strives for clean and simple code. One could learn all about Stormer by browsing the [src](./src/) directory. The source code is self-documenting.

## Bugs & Issues
Stormer is not behaving as you expected? It could be a bug, open an issue. 

You have an idea for a feature or any extension to Stormer? Open an issue or go ahead and PR.

## Contributing
Stormer is a work in progress, just as all software is. Pull requests are encouraged for the following:
- Optimization
- New features
- Documentation
- Examples

## License
Stormer is MIT-licensed free and open source software. You can read the license [here](./LICENSE.txt)
