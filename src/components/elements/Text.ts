import Props from "../../core/Props";
import Transforms from "../../core/Transforms";
import StormTypes from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../Vector";

export default class Text {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = StormTypes.Text;
  text: string;
  pos: Vector;
  maxWidth: number;

  constructor (text: string, pos: Vector, maxWidth?: number) {
    this.text = text;
    this.pos = pos;
    this.maxWidth = maxWidth;
  }

  attachTo (layer: Layer): Text {
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