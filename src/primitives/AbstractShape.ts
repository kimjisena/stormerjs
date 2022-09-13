import { Vector, VectorObj, LineVectors, TriangleVectors } from "./types";

export default interface AbstractShape {
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

  // All shapes must implement this method
  render: () => void;
}
