import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Layer, LineVectors, PropTypes, TransformsType } from "./types";

export default class Line implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Line);

  layer: Layer;
  lineVectors: LineVectors;

  constructor (vectors: LineVectors) {
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.lineVectors = vectors;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Line {
    this.layer = layer.addShape(this);
    return this;
  }

  render (fill?: boolean): void {
    if (!this.layer) {
      throw new Error('Can\'t draw a detached shape. Attach layer.')
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
