import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";

export default class Arc {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Arc);
  center: Vector;
  radius: number;
  startAngle: number;
  endAngle: number;
  direction: boolean;

  constructor (center: Vector, radius: number, startAngle: number, endAngle: number, direction?: boolean) {
    this.center = center;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.direction = direction;
  }

  render () {
    this.#renderer.render();
  }
}
