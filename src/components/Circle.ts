import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import Vector from "../types/Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Circle {
  type: symbol = StormTypes.Circle;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  attach (layer: Layer): Circle {
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
