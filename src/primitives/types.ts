interface PropTypes {
  propsMap: Map<string, any>;

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

    attach (surface: Surface): Point;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Line {
    lineVectors: LineVectors;

    attach (surface: Surface): Line;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Rectangle {
    origin: Vector;
    width: number;
    height: number;

    attach (surface: Surface): Rectangle;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Triangle {
    triangleVectors: TriangleVectors;

    attach (surface: Surface): Triangle;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Ellipse {
    center: Vector;
    width: number;
    height: number;

    attach (surface: Surface): Ellipse;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Circle {
    center: Vector;
    radius: number;

    attach (surface: Surface): Circle;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Arc {
    center: Vector;
    radius: number;
    startAngle: number;
    endAngle: number;
    counterclockwise: boolean;

    attach (surface: Surface): Arc;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Curve {
    anchor: Vector;
    from: Vector;
    to: Vector;

    attach (surface: Surface): Curve;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }

  export interface Bezier {
    anchorOne: Vector;
    anchorTwo: Vector;
    from: Vector;
    to: Vector;

    attach (surface: Surface): Bezier;
    render (fill?: boolean): void;
    shouldUpdate (): boolean;
    getPropsObj (): PropTypes;
    getTransformsObj (): TransformsType;
  }
}

interface AbstractShape {
  // All shapes must implemetnt this field
  surface: Surface;
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
  attach (surface: Surface): AbstractShape;
  render (fill?: boolean): void;
  shouldUpdate (): boolean;
  getPropsObj (): PropTypes;
  getTransformsObj (): TransformsType;
}

interface Group {
  shapes: Array<AbstractShape>;
  surface: Surface;
  config: Map<string, any>;

  configure (prop: string, value: any): void;
  addShape (shape: AbstractShape): void;
  shouldUpdate (): boolean;
  renderShapes (): void;
}

interface Surface {
  groups: Array<Group>;
  _: CanvasRenderingContext2D;

  renderGroups (): void;
}

export { 
  PropTypes,
  TransformsType,

  Vector, 
  LineVectors, 
  TriangleVectors,
  AbstractShape,
  Shapes, 
  Group, 
  Surface, 
}
