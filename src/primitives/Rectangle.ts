import Vector from "./Vector";
import Shape from "./Shape";

export default class Rectangle extends Shape {
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    super();
    
    this.origin = origin;
    this.width = width;
    this.height = height;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw rectangle
    ctx.rect(this.origin.x, this.origin.y, this.width, this.height)
    ctx.fill();


    // restore Canvas state
    ctx.restore();

    // reset status flage
    this.status = false;
  }
}
