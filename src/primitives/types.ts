interface Vector {
  x: number,
  y: number,
}

type LineVectors = Array<Vector>;
type TriangleVectors = { vec1: Vector, vec2: Vector, vec3: Vector };
type VectorObj = LineVectors | TriangleVectors

namespace Shapes {
  interface Point {
    vector: Vector,
  }

  interface Line {
    vectors: LineVectors,
  }

  interface Rectangle {
    origin: Vector,
    width: number,
    height: number,
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
    center: Vector,
    radius: number,
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

export { Vector, LineVectors, TriangleVectors, VectorObj, Shapes }