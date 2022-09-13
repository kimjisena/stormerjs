import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface } from "./types";

export default class Rectangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Rectangle);

  surface: Surface;
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    this.origin = origin;
    this.width = width;
    this.height = height;
    this.#renderer.shape = this;
  }

  attach (surface: Surface): Rectangle {
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
}
