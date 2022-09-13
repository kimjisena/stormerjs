import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector } from "./types";
import AbstractShape from "./AbstractShape";

export default class Circle implements AbstractShape {
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
