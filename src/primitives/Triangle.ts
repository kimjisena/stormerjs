import Vector from "./Vector";
import Shape from "./Shape";

export default class Triangle extends Shape {
  vectors: {vec1: Vector, vec2: Vector, vec3: Vector};

  constructor (vectors: {vec1: Vector, vec2: Vector, vec3: Vector}) {
    super();
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

    // draw triangle
    ctx.beginPath();
    ctx.moveTo(this.vectors.vec1.x, this.vectors.vec1.y);
    ctx.lineTo(this.vectors.vec2.x, this.vectors.vec2.y);
    ctx.lineTo(this.vectors.vec3.x, this.vectors.vec3.y);
    ctx.closePath();
    ctx.fill();

    // restore Canvas state
    ctx.restore();

    // reset status flage
    this.status = false;
  }
}
