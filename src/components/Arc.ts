import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import Vector from "../types/Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Arc {
  type: symbol = StormTypes.Arc;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
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
  }
  attachTo (layer: Layer): Arc {
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
