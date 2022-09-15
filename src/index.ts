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
import Text from "./components/elements/Text";
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
  createTriangleVectors,
  createText,
} from "./utils/creators";

export const Elements = {
  Point, 
  Line, 
  Rectangle, 
  Triangle, 
  Circle, 
  Arc, 
  Ellipse, 
  Curve, 
  Bezier,
  Text,
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
  createText,
  Vector,
}

export default Storm;