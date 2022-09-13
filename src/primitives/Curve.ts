import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";
import { Vector, AbstractShape, Surface, PropTypes } from "./types";

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
    this.#renderer.shape = this;
  }

  attach (surface: Surface): Curve {
    this.surface = surface;
    return this;
  }

  render (): void {
    if (!this.surface) {
      throw new Error('Can\'t draw a detached shape. Attach surface.')
    }
    this.#renderer.render();
  }

  shouldUpdate (): boolean {
    return this.#renderer.shouldUpdate;
  }

  getPropsObj(): PropTypes {
    return this.#renderer.getPropsObject();
  }
}
