import { StormRenderer } from "../renderer/renderer";
import Vector from "./Vector";
import StormTypes from "../utils/symbols";

export default class Point {
  vector: Vector;
  #renderer: StormRenderer = new StormRenderer(StormTypes.Point);

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
    this.#renderer.shape = this;
  }

  render () {
    this.#renderer.render();
  }
}
