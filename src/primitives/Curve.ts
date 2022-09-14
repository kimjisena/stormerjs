import { StormRenderer } from "../renderer/renderer";
import StormTypes from "../utils/symbols";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "./types";

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
