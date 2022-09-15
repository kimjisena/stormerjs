import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import Vector from "../types/Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Bezier {
  type: symbol = StormTypes.Bezier;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
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
  }

  attach (layer: Layer): Bezier {
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
