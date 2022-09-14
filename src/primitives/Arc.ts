import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Layer, PropTypes, TransformsType } from "./types";

export default class Arc implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Arc);

  layer: Layer;
  center: Vector;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterclockwise: boolean;

  constructor (
    center: Vector, 
    radius: number, 
    startAngle: number, 
    endAngle: number, 
    counterclockwise?: boolean
  ) {
    this.center = center;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.counterclockwise = counterclockwise;
    this.#renderer.shape = this;
  }

  attach (layer: Layer): Arc {
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
