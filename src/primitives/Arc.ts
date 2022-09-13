import Vector from "./Vector";
import Shape from "./Shape";
import StormTypes from "../utils/symbols";

export default class Arc extends Shape {
  center: Vector;
  radius: number;
  startAngle: number;
  endAngle: number;
  direction: boolean;

  constructor (center: Vector, radius: number, startAngle: number, endAngle: number, direction?: boolean) {
    super(StormTypes.Arc);
    
    this.center = center;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
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
    let start = this.degToRad(this.startAngle);
    let end = this.degToRad(this.endAngle);
    ctx.arc(this.center.x, this.center.y, this.radius, start, end, this.direction);
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
