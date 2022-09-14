import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { AbstractShape, Layer, TriangleVectors, PropTypes, TransformsType } from "../types";

export default class Triangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Triangle);

  layer: Layer;
  triangleVectors: TriangleVectors;

  constructor (vectors: TriangleVectors) {
    this.triangleVectors = vectors;
    this.#renderer.shape = this;
  }
  
  attach (layer: Layer): Triangle {
    this.layer = layer.addShape(this);
    return this;
  }

  render (): void {
    if (!this.layer) {
      throw new Error('Can\'t draw a detached shape. Attach layer.')
    }
    this.#renderer.render();
  }

  setTransforms (): TransformsType {
    return this.#renderer.getTransformsObject();
  }

  setProps(): PropTypes {
    return this.#renderer.getPropsObject();
  }
}
