import Vector from "./Vector";
import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";

export default class Curve {
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
