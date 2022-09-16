import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Point {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = STORMER_SYMBOLS.Rectangle;
  vector: Vector;

  constructor (x: number, y: number) {
    this.vector = new Vector(x, y);
  }

  attachTo (layer: Layer): Point {
    layer.addElement(this);
    return this;
  }

  setTransforms (): Transforms {
    return this.transforms;
  }

  setProps (): Props {
    return this.props;
  }
}
