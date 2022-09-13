import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface, PropTypes } from "./types";

export default class Ellipse implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Ellipse);

  surface: Surface;
  center: Vector;
  width: number;
  height: number;

  constructor (center: Vector, width: number, height: number) {
    this.center = center;
    this.width = width;
    this.height = height;
    this.#renderer.shape = this;
  }

  attach (surface: Surface): Ellipse {
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
