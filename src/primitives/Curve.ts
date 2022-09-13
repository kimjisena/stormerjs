import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";
import { Vector } from "./types";
import AbstractShape from "./AbstractShape";

export default class Curve implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Curve);
  anchor: Vector;
  from: Vector;
  to: Vector;

  constructor (anchor: Vector, from: Vector, to: Vector) {
    this.anchor = anchor;
    this.from = from;
    this.to = to;
  }

  render () {
    this.#renderer.render();
  }
}
