import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Ellipse {
  type: symbol = STORMER_SYMBOLS.Ellipse;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  center: Vector;
  width: number;
  height: number;

  constructor (center: Vector, width: number, height: number) {
    this.center = center;
    this.width = width;
    this.height = height;
  }

  attachTo (layer: Layer): Ellipse {
    layer.addElement(this);
    return this;
  }
}
