import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";
import { Vector, AbstractShape, Surface } from "./types";

export default class Curve implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Curve);

  surface: Surface;
  anchor: Vector;
  from: Vector;
  to: Vector;

  constructor (anchor: Vector, from: Vector, to: Vector) {
    this.anchor = anchor;
    this.from = from;
    this.to = to;
  }

  render (): void {
    this.#renderer.render();
  }

  shouldUpdate (): boolean {
    return this.#renderer.shouldUpdate;
  }
}
