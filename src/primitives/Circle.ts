import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";

export default class Circle {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Circle);
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  render () {
    this.#renderer.render();
  }
}
