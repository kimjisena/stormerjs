import Surface from "./surface";
import AbstractShape from "./AbstractShape";

export default class Group {
  shapes: Array<AbstractShape>;
  surface: Surface;
  config: Map<string, any>

  constructor (surface: Surface) {
    this.surface = surface;
  }

  configure (prop: string, value: any) {
    // configure group-wise properties e.g fillStyle
    this.config.set(prop, value);
  }

  addShape (shape: AbstractShape) {
    shape.surface = this.surface;
    this.shapes.push(shape);
  }

  shouldUpdate () {
    return this.shapes.some(shape => shape.shouldUpdate);
  }

  renderShapes () {
    
    const ctx = this.surface._surface;

    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // render individual shapes
    for (let shape of this.shapes) {
      shape.render();
    }

    // restore Canvas state
    ctx.restore();
  }
}