import Props from "../../core/Props";
import Transforms from "../../core/Transforms";
import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import Vector from "../Vector";

export default class Image {
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  type: symbol = STORMER_SYMBOLS.Image;
  image: HTMLImageElement;
  hasLoaded: boolean = false;
  spos: Vector;
  sw: number;
  sh: number;
  dpos: Vector;
  dw: number;
  dh: number;

  constructor (url: string, dpos: Vector)
  constructor (url: string, dpos: Vector, dw: number, dh: number)
  constructor (url: string, spos: Vector, sw: number, sh: number, dpos: Vector, dw: number, dh: number)
  constructor (url: string, dpos: Vector, dw?: number, dh?: number, spos?: Vector, sw?: number, sh?: number) {
    this.image = document.createElement('img');
    this.image.src = url;
    this.spos = spos;
    this.sw = sw;
    this.sh = sh;
    this.dpos = dpos;
    this.dw = dw;
    this.dh = dh;
  }

  attachTo (layer: Layer): Image {
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