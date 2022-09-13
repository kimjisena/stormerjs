import { StormRenderer } from "../renderer/renderer";
import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { AbstractShape, Surface } from "./types";

export default class Point implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Point);

  surface: Surface;
  vector: Vector;

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
    this.#renderer.shape = this;
    this.#renderer.shape = this;
  }

  attach (surface: Surface): void {
    this.surface = surface;
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
