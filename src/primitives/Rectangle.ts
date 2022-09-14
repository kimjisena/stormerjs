import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "./types";

export default class Rectangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Rectangle);

  layer: Layer;
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    this.origin = origin;
    this.width = width;
    this.height = height;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Rectangle {
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

  getPropsObj (): PropTypes {
    return this.#renderer.getPropsObject();
  }
}
