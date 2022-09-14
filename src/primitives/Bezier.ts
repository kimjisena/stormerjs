import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "../types";

export default class Bezier implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Bezier);

  layer: Layer;
  anchorOne: Vector;
  anchorTwo: Vector;
  from: Vector;
  to: Vector;

  constructor (anchorOne: Vector, anchorTwo: Vector, from: Vector, to: Vector) {
    this.anchorOne = anchorOne;
    this.anchorTwo = anchorTwo;
    this.from = from;
    this.to = to;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Bezier {
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
