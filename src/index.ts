import Surface from "./primitives/surface";
import Shapes, { Vector } from "./primitives/shapes";
import { 
  createLineVectors, 
  createTriangleVectors, 
  createLine,
  createRectangle,
  createTriangle,
  createCircle,
  createEllipse,
  createArc,
  createCurve,
  createBezier
} from "./utils/helpers";

const Storm =  { 
  Surface,
  Shapes,
  Vector,
};

export {
  createLineVectors,
  createTriangleVectors,

  createLine,
  createRectangle,
  createTriangle,
  createCircle,
  createEllipse,
  createArc,
  createCurve,
  createBezier,
}

export default Storm;
