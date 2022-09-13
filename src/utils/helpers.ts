import Vector from "../primitives/Vector";
import { LineVectors, TriangleVectors, Shapes } from "../primitives/types";
import Line from "../primitives/Line";
import Triangle from "../primitives/Triangle";
import Rectangle from "../primitives/Rectangle";
import Circle from "../primitives/Circle";
import Ellipse from "../primitives/Ellipse";
import Arc from "../primitives/Arc";
import Curve from "../primitives/Curve";
import Bezier from "../primitives/Bezier";

function createLineVectors (...coords: number[]): LineVectors {
  const vectors: LineVectors = [];
  if (coords.length % 2 !== 0) {
    throw new Error('A vector is missing coordinates.');
  }

  for (let i = 0; i < coords.length; i += 2) {
    let vector = new Vector(coords[i], coords[i + 1]);
    vectors.push(vector);
  }
  return vectors;
}

function createTriangleVectors (...coords: number[]): TriangleVectors {
  const vectors: TriangleVectors = {
    vec1: null,
    vec2: null,
    vec3: null
  };

  if (coords.length !== 6) {
    throw new Error('Can\'t draw a triangle with less than or more than three vectors.');
  }

  for (let i = 0; i < coords.length; i += 2) {
    let vector = new Vector(coords[i], coords[i + 1]);
    switch (i) {
      case 0:
        vectors[`vec${1}`] = vector;
        break;
      case 2:
        vectors[`vec${2}`] = vector;
        break;
      case 4:
        vectors[`vec${3}`] = vector;
        break;
      default:
        break;
    }
  }

  return vectors;
}

function createLine (...coords: number[]): Shapes.Line {
  let vectors: LineVectors;
  try {
    vectors = createLineVectors(...coords);
  } catch(err) {
    throw err;
  }
  return new Line(vectors);
}

function createRectangle (
  x: number, 
  y: number, 
  w: number, 
  h: number
): Shapes.Rectangle {
  let vector = new Vector(x, y);
  return new Rectangle(vector, w, h);
}

function createTriangle (...coords: number[]): Shapes.Triangle {
  let vectors: TriangleVectors;
  try {
    vectors = createTriangleVectors(...coords);
  } catch(err) {
    throw err;
  }

  return new Triangle(vectors);
}

function createCircle (x: number, y: number, rad: number): Shapes.Circle {
  let vector = new Vector(x, y);
  return new Circle(vector, rad);
}

function createEllipse (
  x: number, 
  y: number, 
  w: number, 
  h: number
): Shapes.Ellipse {
  let vector = new Vector(x, y);
  return new Ellipse(vector, w, h);
}

function createArc (
  x: number, 
  y: number,
  rad: number,
  startAngle: number, 
  endAngle: number, 
  direction?: boolean
): Shapes.Arc {
  let vector = new Vector(x, y);

  return new Arc(vector, rad, startAngle, endAngle, direction);
}

function createCurve (
  anchorX: number,
  anchorY: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): Shapes.Curve {
  let anchor = new Vector(anchorX, anchorY);
  let from = new Vector(fromX, fromY);
  let to = new Vector(toX, toY);

  return new Curve(anchor, from, to);
}

function createBezier (
  anchorOneX: number,
  anchorOneY: number,
  anchorTwoX: number,
  anchorTwoY: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
): Shapes.Bezier {
  let anchorOne = new Vector(anchorOneX, anchorOneY);
  let anchorTwo = new Vector(anchorTwoX, anchorTwoY);
  let from = new Vector(fromX, fromY);
  let to = new Vector(toX, toY);

  return new Bezier(anchorOne, anchorTwo, from, to);
}

export {
  // vector creators
  createLineVectors, 
  createTriangleVectors,

  // shape creators
  createLine,
  createRectangle,
  createTriangle,
  createCircle,
  createEllipse,
  createArc,
  createCurve,
  createBezier,
}
