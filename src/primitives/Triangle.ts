import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Surface, TriangleVectors } from "./types";

export default class Triangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Triangle);

  surface: Surface;
  triangleVectors: TriangleVectors;

  constructor (vectors: TriangleVectors) {
    this.triangleVectors = vectors;
    this.#renderer.shape = this;
  }
  
  attach (surface: Surface): Triangle {
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
