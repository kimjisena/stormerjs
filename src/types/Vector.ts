export default interface Vector {
  x: number;
  y: number;
}

type LineVectors = Array<Vector>;

interface TriangleVectors {
  vec1: Vector;
  vec2: Vector;
  vec3: Vector;
}

export {
  LineVectors,
  TriangleVectors,
}