import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import Vector from "../types/Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Rectangle {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = StormTypes.Rectangle;
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    this.origin = origin;
    this.width = width;
    this.height = height;
  }

  attach (layer: Layer): Rectangle {
    layer.addShape(this);
    return this;
  }

  setTransforms (): Transforms {
    return this.transforms;
  }

  setProps (): Props {
    return this.props;
  }
}
