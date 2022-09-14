import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "../types";

export default class Curve implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Curve);

  layer: Layer;
  anchor: Vector;
  from: Vector;
  to: Vector;

  constructor (anchor: Vector, from: Vector, to: Vector) {
    this.anchor = anchor;
    this.from = from;
    this.to = to;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Curve {
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
