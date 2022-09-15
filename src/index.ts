import { createRoot, createLayer } from "./core/stormProper";
import Point from "./components/elements/Point";
import Line from "./components/elements/Line";
import Rectangle from "./components/elements/Rectangle";
import Triangle from "./components/elements/Triangle";
import Circle from "./components/elements/Circle";
import Arc from "./components/elements/Arc";
import Ellipse from "./components/elements/Ellipse";
import Curve from "./components/elements/Curve";
import Bezier from "./components/elements/Bezier";
import Vector from "./components/Vector";
import { 
  createRectangle, 
  createArc, 
  createBezier, 
  createCircle, 
  createCurve, 
  createEllipse, 
  createLine,
  createLineVectors, 
  createTriangle, 
  createTriangleVectors 
} from "./utils/creators";

export const Shapes = {
  Point, 
  Line, 
  Rectangle, 
  Triangle, 
  Circle, 
  Arc, 
  Ellipse, 
  Curve, 
  Bezier,
};

const Storm = {
  createRoot,
  createLayer,
  createRectangle,
  createArc, 
  createBezier, 
  createCircle, 
  createCurve, 
  createEllipse, 
  createLine,
  createLineVectors, 
  createTriangle, 
  createTriangleVectors,
  Vector,
}

export default Storm;