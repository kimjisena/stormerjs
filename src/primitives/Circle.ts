import Vector from "./Vector";
import Shape from "./Shape";
import StormTypes from "../utils/symbols";

export default class Circle extends Shape {
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    super(StormTypes.Circle);

    this.center = center;
    this.radius = radius;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw circle
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
    if (this.shouldFill) {
      ctx.fill();
    } else {
      ctx.stroke();
    }

    // restore Canvas state
    ctx.restore();

    // reset status flage
    this.shouldUpdate = false;
  }
}
