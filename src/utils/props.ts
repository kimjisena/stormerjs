import { PropTypes } from "../primitives/types";

const keys =  {
  direction: 'direction',
  fillStyle: 'fillStyle',
  filter: 'filter',
  font: 'font',
  fontKerning: 'fontKerning',
  fontStretch: 'fontStretch',
  fontVariantCaps: 'fontVariantCaps',
  globalAlpha: 'globalAlpha',
  globalCompositeOperation: 'globalCompositeOperation',
  imageSmoothingEnabled: 'imageSmoothingEnabled',
  imageSmoothingQuality: 'imageSmoothingQuality',
  letterSpacing: 'letterSpacing',
  lineCap: 'lineCap',
  lineDashOffset: 'lineDashOffset',
  lineJoin: 'lineJoin',
  lineWidth: 'lineWidth',
  miterLimit: 'miterLimit',
  shadowBlur: 'shadowBlur',
  shadowColor: 'shadowColor',
  shadowOffsetX: 'shadowOffsetX',
  shadowOffsetY: 'shadowOffsetY',
  strokeStyle: 'strokeStyle',
  textAlign: 'textAlign',
  textBaseline: 'textBaseline',
  textRendering: 'textRendering',
  wordSpacing: 'wordSpacing',
};

export default class Props implements PropTypes {
  #$_$: Map<string, any>;

  constructor () {
    this.#$_$ = new Map();
  }

  get propsMap (): Map<string, any> {
    return this.#$_$;
  }

  direction (value: string): PropTypes {
    this.#$_$.set(keys.direction, value);
    return this;
  }

  fillStyle (value: string): PropTypes {
    this.#$_$.set(keys.fillStyle, value);
    return this;
  }

  filter (value: string): PropTypes {
    this.#$_$.set(keys.filter, value);
    return this;
  }

  font (value: string): PropTypes {
    this.#$_$.set(keys.font, value);
    return this;
  }

  fontKerning (value: string): PropTypes {
    this.#$_$.set(keys.fontKerning, value);
    return this;
  }

  fontStretch (value: string): PropTypes {
    this.#$_$.set(keys.fontStretch, value);
    return this;
  }

  fontVariantCaps (value: string): PropTypes {
    this.#$_$.set(keys.fontVariantCaps, value);
    return this;
  }

  globalAlpha (value: number): PropTypes {
    this.#$_$.set(keys.globalAlpha, value);
    return this;
  }

  globalCompositeOperation (value: string): PropTypes {
    this.#$_$.set(keys.globalCompositeOperation, value);
    return this;
  }

  imageSmoothingEnabled (value: boolean): PropTypes {
    this.#$_$.set(keys.imageSmoothingEnabled, value);
    return this;
  }

  imageSmoothingQuality (value: string): PropTypes {
    this.#$_$.set(keys.imageSmoothingQuality, value);
    return this;
  }

  letterSpacing (value: string): PropTypes {
    this.#$_$.set(keys.letterSpacing, value);
    return this;
  }

  lineCap (value: string): PropTypes {
    this.#$_$.set(keys.lineCap, value);
    return this;
  }

  lineDashOffset (value: number): PropTypes {
    this.#$_$.set(keys.lineDashOffset, value);
    return this;
  }

  lineJoin (value: string): PropTypes {
    this.#$_$.set(keys.lineJoin, value);
    return this;
  }

  lineWidth (value: number): PropTypes {
    this.#$_$.set(keys.lineWidth, value);
    return this;
  }

  miterLimit (value: number): PropTypes {
    this.#$_$.set(keys.miterLimit, value);
    return this;
  }

  shadowBlur (value: number): PropTypes {
    this.#$_$.set(keys.shadowBlur, value);
    return this;
  }

  shadowColor (value: string): PropTypes {
    this.#$_$.set(keys.shadowColor, value);
    return this;
  }

  shadowOffsetX (value: number): PropTypes {
    this.#$_$.set(keys.shadowOffsetX, value);
    return this;
  }

  shadowOffsetY (value: number): PropTypes {
    this.#$_$.set(keys.shadowOffsetY, value);
    return this;
  }

  strokeStyle (value: string): PropTypes {
    this.#$_$.set(keys.strokeStyle, value);
    return this;
  }

  textAlign (value: string): PropTypes {
    this.#$_$.set(keys.textAlign, value);
    return this;
  }

  textBaseline (value: string): PropTypes {
    this.#$_$.set(keys.textBaseline, value);
    return this;
  }

  textRendering (value: string): PropTypes {
    this.#$_$.set(keys.textRendering, value);
    return this;
  }

  wordSpacing (value: string): PropTypes {
    this.#$_$.set(keys.wordSpacing, value);
    return this;
  }
}
