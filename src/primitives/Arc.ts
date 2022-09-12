import Vector from "./Vector";
import Shape from "./Shape";
import { degToRad } from "../utils/math";

export default class Arc extends Shape {
  center: Vector;
  radius: number;
  start: number;
  end: number;
  direction: boolean;

  constructor (center: Vector, radius: number, startAngle: number, endAngle: number, direction?: boolean) {
    super();
    
    this.center = center;
    this.radius = radius;
    this.start = degToRad(startAngle);
    this.end = degToRad(endAngle);
    this.direction = direction;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw arc
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, this.start, this.end, this.direction);
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
