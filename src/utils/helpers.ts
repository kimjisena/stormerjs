import Vector from "../primitives/Vector";
import { LineVectors, TriangleVectors } from "../primitives/types";

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

export { createLineVectors, createTriangleVectors }