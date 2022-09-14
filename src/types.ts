interface PropTypes {
  propsMap: Map<string, any>;
  fill: boolean;
  strictNotFill: boolean;

  shouldFill (value: boolean): PropTypes;
  direction (value: string): PropTypes;
  fillStyle (value: string): PropTypes;
  filter (value: string): PropTypes;
  font (value: string): PropTypes;
  fontKerning (value: string): PropTypes;
  fontStretch (value: string): PropTypes;
  fontVariantCaps (value: string): PropTypes;
  globalAlpha (value: number): PropTypes;
  globalCompositeOperation (value: string): PropTypes;
  imageSmoothingEnabled (value: boolean): PropTypes;
  imageSmoothingQuality (value: string): PropTypes;
  letterSpacing (value: string): PropTypes;
  lineCap (value: string): PropTypes;
  lineDashOffset (value: number): PropTypes;
  lineJoin (value: string): PropTypes;
  lineWidth (value: number): PropTypes;
  miterLimit (value: number): PropTypes;
  shadowBlur (value: number): PropTypes;
  shadowColor (value: string): PropTypes;
  shadowOffsetX (value: number): PropTypes;
  shadowOffsetY (value: number): PropTypes;
  strokeStyle (value: string): PropTypes;
  textAlign (value: string): PropTypes;
  textBaseline (value: string): PropTypes;
  textRendering (value: string): PropTypes;
  wordSpacing (value: string): PropTypes;
}

interface TransformsType {
  transformActions: Array<any>;

  degToRad (deg: number): number;
  translate (x: number, y: number): TransformsType;
  rotate (angle: number): TransformsType;
  scale (x: number, y: number): TransformsType;
}

interface Vector {
  x: number;
  y: number;

}

type LineVectors = Array<Vector>;

interface TriangleVectors {
  vec1: Vector;
  vec2: Vector;
  vec3: Vector;
}

namespace Shapes {
  export interface Point {
    vector: Vector;

    attach (surface: Layer): Point;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Line {
    lineVectors: LineVectors;

    attach (surface: Layer): Line;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Rectangle {
    origin: Vector;
    width: number;
    height: number;

    attach (surface: Layer): Rectangle;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Triangle {
    triangleVectors: TriangleVectors;

    attach (surface: Layer): Triangle;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Ellipse {
    center: Vector;
    width: number;
    height: number;

    attach (surface: Layer): Ellipse;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Circle {
    center: Vector;
    radius: number;

    attach (surface: Layer): Circle;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Arc {
    center: Vector;
    radius: number;
    startAngle: number;
    endAngle: number;
    counterclockwise: boolean;

    attach (surface: Layer): Arc;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Curve {
    anchor: Vector;
    from: Vector;
    to: Vector;

    attach (surface: Layer): Curve;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }

  export interface Bezier {
    anchorOne: Vector;
    anchorTwo: Vector;
    from: Vector;
    to: Vector;

    attach (surface: Layer): Bezier;
    render (): void;

    setProps (): PropTypes;
    setTransforms (): TransformsType;
  }
}

interface AbstractShape {
  // All shapes must implemetnt this field
  layer: Layer;
  // Implemented by Shapes.Point
  vector?: Vector;

  // Implemented by Shapes.Line
  lineVectors?: LineVectors;

  // Implemented by Shapes.Triangle
  triangleVectors?: TriangleVectors;

  // Implemented by Shapes.Rectangle
  origin?: Vector;

  // Implemented by Shapes.Rectangle and Shapes.Ellipse
  width?: number;
  height?: number;

  // Implemented by Shapes.Cycle, Shapes.Arc and Shapes.Ellipse
  center?: Vector;

  // Implemented by Shapes.Cycle, Shapes.Arc
  radius?: number;

  // Implemented by Shapes.Arc
  startAngle?: number;
  endAngle?: number;
  counterclockwise?: boolean;

  // Implemented by Shapes.Curve
  anchor?: Vector;

  // Implemented by Shapes.Curve and Shapes.Bezier
  from?: Vector;
  to?: Vector;

  // Implemented by Shapes.Bezier
  anchorOne?: Vector;
  anchorTwo?: Vector;

  // All shapes must implement these methods
  attach (layer: Layer): AbstractShape;
  render (): void;
  setProps (): PropTypes;
  setTransforms (): TransformsType;
}

interface Layer {
  __context: CanvasRenderingContext2D;
  _UNSTABLE__volatile__draw (): void;

  addShape (shape: AbstractShape): Layer;
  setProps (): PropTypes;
  clearCanvas (): void;
  clearLayer (): Layer;
  render (): Layer;
}

export { 
  PropTypes,
  TransformsType,

  Vector, 
  LineVectors, 
  TriangleVectors,
  AbstractShape,
  Shapes, 
  Layer, 
}
