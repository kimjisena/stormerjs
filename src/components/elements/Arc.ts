import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Arc {
  type: symbol = STORMER_SYMBOLS.Arc;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
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
    layer.addElement(this);
    return this;
  }
}
