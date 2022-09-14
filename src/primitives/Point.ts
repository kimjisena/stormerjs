import { StormRenderer } from "../renderer/renderer";
import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { AbstractShape, Layer, PropTypes, TransformsType } from "./types";

export default class Point implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Point);

  layer: Layer;
  vector: Vector;

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
    this.#renderer.shape = this;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Point {
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
