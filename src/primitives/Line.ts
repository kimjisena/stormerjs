import Shape from "./Shape";
import Vector from "./Vector";

export default class Line extends Shape{
  vectors: Array<Vector>;

  constructor (vectors: Array<Vector>) {
    super();
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.vectors = vectors;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw line
    ctx.beginPath();
    ctx.moveTo(this.vectors[0].x, this.vectors[0].y);
    for (let i = 1; i < this.vectors.length; i++) {
      ctx.lineTo(this.vectors[i].x, this.vectors[i].y);
    }
    ctx.stroke();

    // restore Canvas state
    ctx.restore();

    // reset status flage
    this.status = false;
  }
}
