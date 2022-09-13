import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface, PropTypes } from "./types";

export default class Circle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Circle);

  surface: Surface;
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
    this.#renderer.shape = this;
  }

  attach (surface: Surface): Circle {
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
