import Surface from "./primitives/surface";
import Group from "./primitives/group";
import Shapes, { Vector } from "./primitives/shapes";
import { createLineVectors, createTriangleVectors } from "./utils/helpers";

const Storm =  { 
  Surface,
  Group,
  Shapes,
  Vector,

  // helper functions
  createLineVectors,
  createTriangleVectors,
};

export default Storm;