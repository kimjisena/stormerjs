import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "../types";

export default class Ellipse implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Ellipse);

  layer: Layer;
  center: Vector;
  width: number;
  height: number;

  constructor (center: Vector, width: number, height: number) {
    this.center = center;
    this.width = width;
    this.height = height;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Ellipse {
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
