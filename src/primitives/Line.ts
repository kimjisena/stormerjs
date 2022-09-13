import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Surface, LineVectors } from "./types";

export default class Line implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Line);

  surface: Surface;
  lineVectors: LineVectors;

  constructor (vectors: LineVectors) {
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.lineVectors = vectors;
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
