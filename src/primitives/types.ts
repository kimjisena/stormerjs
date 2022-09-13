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
  interface Point {
    vector: Vector;
  }

  interface Line {
    vectors: LineVectors,
  }

  interface Rectangle {
    origin: Vector;
    width: number;
    height: number;
  }

  interface Triangle {
    vectors: TriangleVectors,
  }

  interface Ellipse {
    center: Vector;
    width: number;
    height: number;
  }

  interface Circle {
    center: Vector;
    radius: number;
  }

  interface Arc {
    center: Vector;
    radius: number;
    startAngle: number;
    endAngle: number;
    direction: boolean;
  }

  interface Curve {
    anchor: Vector;
    from: Vector;
    to: Vector;
  }

  interface Bezier {
    anchorOne: Vector;
    anchorTwo: Vector;
    from: Vector;
    to: Vector;
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
  direction?: boolean;

  // Implemented by Shapes.Curve
  anchor?: Vector;

  // Implemented by Shapes.Curve and Shapes.Bezier
  from?: Vector;
  to?: Vector;

  // Implemented by Shapes.Bezier
  anchorOne?: Vector;
  anchorTwo?: Vector;

  // All shapes must implement these methods
  render (): void;
  shouldUpdate (): boolean;
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
  Vector, 
  LineVectors, 
  TriangleVectors,
  AbstractShape,
  Shapes, 
  Group, 
  Surface, 
}
