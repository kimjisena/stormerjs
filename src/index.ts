import { createRoot, createLayer } from "./core/stormProper";
import Point from "./components/Point";
import Line from "./components/Line";
import Rectangle from "./components/Rectangle";
import Triangle from "./components/Triangle";
import Circle from "./components/Circle";
import Arc from "./components/Arc";
import Ellipse from "./components/Ellipse";
import Curve from "./components/Curve";
import Bezier from "./components/Bezier";
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