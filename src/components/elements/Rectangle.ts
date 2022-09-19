import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Rectangle {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = STORMER_SYMBOLS.Rectangle;
  origin: Vector;
  width: number;
  height: number;

  constructor (origin: Vector, width: number, height: number) {
    this.origin = origin;
    this.width = width;
    this.height = height;
  }

  attachTo (layer: Layer): Rectangle {
    layer.addElement(this);
    return this;
  }
}
