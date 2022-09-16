import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Curve {
  type: symbol = STORMER_SYMBOLS.Curve;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  anchor: Vector;
  from: Vector;
  to: Vector;

  constructor (anchor: Vector, from: Vector, to: Vector) {
    this.anchor = anchor;
    this.from = from;
    this.to = to;
  }

  attachTo (layer: Layer): Curve {
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
