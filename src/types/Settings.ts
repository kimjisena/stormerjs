interface Props {
  propsMap: Map<string, any>;
  fill: boolean;
  strictNotFill: boolean;

  shouldFill (value: boolean): Props;
  direction (value: string): Props;
  fillStyle (value: string): Props;
  filter (value: string): Props;
  font (value: string): Props;
  fontKerning (value: string): Props;
  fontStretch (value: string): Props;
  fontVariantCaps (value: string): Props;
  globalAlpha (value: number): Props;
  globalCompositeOperation (value: string): Props;
  imageSmoothingEnabled (value: boolean): Props;
  imageSmoothingQuality (value: string): Props;
  letterSpacing (value: string): Props;
  lineCap (value: string): Props;
  lineDashOffset (value: number): Props;
  lineJoin (value: string): Props;
  lineWidth (value: number): Props;
  miterLimit (value: number): Props;
  shadowBlur (value: number): Props;
  shadowColor (value: string): Props;
  shadowOffsetX (value: number): Props;
  shadowOffsetY (value: number): Props;
  strokeStyle (value: string): Props;
  textAlign (value: string): Props;
  textBaseline (value: string): Props;
  textRendering (value: string): Props;
  wordSpacing (value: string): Props;
}

interface Transforms {
  transformActions: Array<any>;

  translate (x: number, y: number): Transforms;
  rotate (angle: number): Transforms;
  scale (x: number, y: number): Transforms;
}

export { Props, Transforms };
