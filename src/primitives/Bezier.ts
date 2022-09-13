import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";

export default class Bezier {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Bezier);
  anchorOne: Vector;
  anchorTwo: Vector;
  from: Vector;
  to: Vector;

  constructor (anchorOne: Vector, anchorTwo: Vector, from: Vector, to: Vector) {
    this.anchorOne = anchorOne;
    this.anchorTwo = anchorTwo;
    this.from = from;
    this.to = to;
  }

  render () {
    this.#renderer.render();
  }
}
