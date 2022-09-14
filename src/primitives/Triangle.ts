import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Surface, TriangleVectors, PropTypes, TransformsType } from "./types";

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

  render (fill?: boolean): void {
    if (!this.surface) {
      throw new Error('Can\'t draw a detached shape. Attach surface.')
    }
    if (fill !== undefined) {
      this.#renderer.render(fill);
    } else {
      this.#renderer.render();
    }
  }

  getTransformsObj (): TransformsType {
    return this.#renderer.getTransformsObject();
  }

  getPropsObj(): PropTypes {
    return this.#renderer.getPropsObject();
  }
}
