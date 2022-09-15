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

export default class Props {
  #__props__: Map<string, any>;
  #fill: boolean = false;
  #__STRICT_NOT_FILL: boolean = false;

  constructor () {
    this.#__props__ = new Map();
  }

  get propsMap (): Map<string, any> {
    return this.#__props__;
  }

  set propsMap (value: Map<string, any>) {
    this.#__props__ = new Map(value);
  }

  get fill (): boolean {
    return this.#fill;
  }

  get strictNotFill (): boolean {
    return this.#__STRICT_NOT_FILL;
  }

  shouldFill (value: boolean): Props {
    if (!value) {
      this.#__STRICT_NOT_FILL = true;
    } else {
      this.#fill = value;
    }

    return this;
  }

  direction (value: string): Props {
    this.#__props__.set(keys.direction, value);
    return this;
  }

  fillStyle (value: string): Props {
    this.#__props__.set(keys.fillStyle, value);
    return this;
  }

  filter (value: string): Props {
    this.#__props__.set(keys.filter, value);
    return this;
  }

  font (value: string): Props {
    this.#__props__.set(keys.font, value);
    return this;
  }

  fontKerning (value: string): Props {
    this.#__props__.set(keys.fontKerning, value);
    return this;
  }

  fontStretch (value: string): Props {
    this.#__props__.set(keys.fontStretch, value);
    return this;
  }

  fontVariantCaps (value: string): Props {
    this.#__props__.set(keys.fontVariantCaps, value);
    return this;
  }

  globalAlpha (value: number): Props {
    this.#__props__.set(keys.globalAlpha, value);
    return this;
  }

  globalCompositeOperation (value: string): Props {
    this.#__props__.set(keys.globalCompositeOperation, value);
    return this;
  }

  imageSmoothingEnabled (value: boolean): Props {
    this.#__props__.set(keys.imageSmoothingEnabled, value);
    return this;
  }

  imageSmoothingQuality (value: string): Props {
    this.#__props__.set(keys.imageSmoothingQuality, value);
    return this;
  }

  letterSpacing (value: string): Props {
    this.#__props__.set(keys.letterSpacing, value);
    return this;
  }

  lineCap (value: string): Props {
    this.#__props__.set(keys.lineCap, value);
    return this;
  }

  lineDashOffset (value: number): Props {
    this.#__props__.set(keys.lineDashOffset, value);
    return this;
  }

  lineJoin (value: string): Props {
    this.#__props__.set(keys.lineJoin, value);
    return this;
  }

  lineWidth (value: number): Props {
    this.#__props__.set(keys.lineWidth, value);
    return this;
  }

  miterLimit (value: number): Props {
    this.#__props__.set(keys.miterLimit, value);
    return this;
  }

  shadowBlur (value: number): Props {
    this.#__props__.set(keys.shadowBlur, value);
    return this;
  }

  shadowColor (value: string): Props {
    this.#__props__.set(keys.shadowColor, value);
    return this;
  }

  shadowOffsetX (value: number): Props {
    this.#__props__.set(keys.shadowOffsetX, value);
    return this;
  }

  shadowOffsetY (value: number): Props {
    this.#__props__.set(keys.shadowOffsetY, value);
    return this;
  }

  strokeStyle (value: string): Props {
    this.#__props__.set(keys.strokeStyle, value);
    return this;
  }

  textAlign (value: string): Props {
    this.#__props__.set(keys.textAlign, value);
    return this;
  }

  textBaseline (value: string): Props {
    this.#__props__.set(keys.textBaseline, value);
    return this;
  }

  textRendering (value: string): Props {
    this.#__props__.set(keys.textRendering, value);
    return this;
  }

  wordSpacing (value: string): Props {
    this.#__props__.set(keys.wordSpacing, value);
    return this;
  }
}
