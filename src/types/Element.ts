import { Props, Transforms } from "./Settings";
import Vector, { LineVectors, TriangleVectors } from "./Vector";
import Layer from "./Layer";

export default interface Element {
  // All Elements must implement these properties
  type: symbol;
  props: Props;
  transforms: Transforms;

  // Elements.Vector
  vector?: Vector;

  // Elements.Line
  lineVectors?: LineVectors;

  // Elements.Triangle
  triangleVectors?: TriangleVectors;

  // Elements.Arc, Elements.Circle and Elements.Ellipse
  center?: Vector;

  // Elements.Arc and Elements.Circle
  radius?: number;

  // Elements.Rectangle and Elements.Text
  origin?: Vector;

  // Elements.Text
  text?: string;
  maxWidth?: number;

  // Elements.Rectangle and Elements.Ellipse
  width?: number;
  height?: number;

  // Elements.Arc
  startAngle?: number;
  endAngle?: number;
  counterclockwise?: boolean;

  // Elements.Curve
  anchor?: Vector;

  // Elements.Curve and Elements.Bezier
  from?: Vector;
  to?: Vector;

  // Elements.Bezier
  anchorOne?: Vector;
  anchorTwo?: Vector;

  // Elements.Image
  image?: HTMLImageElement;
  hasLoaded?: boolean;
  spos?: Vector;
  sw?: number;
  sh?: number;
  dpos?: Vector;
  dw?: number;
  dh?: number;

  // All Elements must implement these methods
  attachTo (layer: Layer): Element;
}
