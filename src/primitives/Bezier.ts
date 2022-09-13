import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface } from "./types";

export default class Bezier implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Bezier);

  surface: Surface;
  anchorOne: Vector;
  anchorTwo: Vector;
  from: Vector;
  to: Vector;

  constructor (anchorOne: Vector, anchorTwo: Vector, from: Vector, to: Vector) {
    this.anchorOne = anchorOne;
    this.anchorTwo = anchorTwo;
    this.from = from;
    this.to = to;
    this.#renderer.shape = this;
  }

  render (): void {
    this.#renderer.render();
  }

  shouldUpdate (): boolean {
    return this.#renderer.shouldUpdate;
  }
}
