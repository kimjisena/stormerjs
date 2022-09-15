import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import Vector from "./Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Point {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = StormTypes.Rectangle;
  vector: Vector;

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
  }

  attach (layer: Layer): Point {
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
