import { StormRenderer } from "../renderer/renderer";
import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import type AbstractShape from "./AbstractShape";

export default class Point implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Point);
  vector: Vector;

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
    this.#renderer.shape = this;
  }

  render () {
    this.#renderer.render();
  }
}
