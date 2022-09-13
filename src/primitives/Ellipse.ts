import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import AbstractShape from "./AbstractShape";
import { Vector } from "./types";

export default class Ellipse implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Ellipse);
  center: Vector;
  width: number;
  height: number;

  constructor (center: Vector, width: number, height: number) {
    this.center = center;
    this.width = width;
    this.height = height;
  }

  render () {
    this.#renderer.render();
  }
}
