import Shape from "./Shape";
import Vector from "./Vector";

export default class Point extends Shape {
  vector: Vector;

  constructor (x: number, y: number) {
    super();
    this.vector = new Vector(x, y);
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw point (1 pixel)
    ctx.beginPath();
    ctx.moveTo(this.vector.x, this.vector.y);
    ctx.lineTo(this.vector.x + 1, this.vector.y + 1);
    ctx.stroke();

    // restore Canvas state
    ctx.restore();

    // reset status flage
    this.status = false;
  }
}
