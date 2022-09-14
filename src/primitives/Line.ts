import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Surface, LineVectors, PropTypes, TransformsType } from "./types";

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

  attach (surface: Surface): Line {
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
