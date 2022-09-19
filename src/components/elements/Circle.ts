import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Circle {
  type: symbol = STORMER_SYMBOLS.Circle;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  attachTo (layer: Layer): Circle {
    layer.addElement(this);
    return this;
  }
}
