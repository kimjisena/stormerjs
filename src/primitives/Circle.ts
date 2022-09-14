import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "./types";

export default class Circle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Circle);

  layer: Layer;
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Circle {
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
