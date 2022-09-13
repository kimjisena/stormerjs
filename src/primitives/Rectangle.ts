import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import type AbstractShape from "./AbstractShape";

export default class Rectangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Rectangle);
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    this.origin = origin;
    this.width = width;
    this.height = height;
  }

  render () {
    this.#renderer.render();
  }
}
