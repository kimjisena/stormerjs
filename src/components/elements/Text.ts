import Props from "../../core/Props";
import Transforms from "../../core/Transforms";
import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../Vector";

export default class Text {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = STORMER_SYMBOLS.Text;
  text: string;
  origin: Vector;
  maxWidth: number;

  constructor (text: string, pos: Vector, maxWidth?: number) {
    this.text = text;
    this.origin = pos;
    this.maxWidth = maxWidth;
  }

  attachTo (layer: Layer): Text {
    layer.addElement(this);
    return this;
  }
}