import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import AbstractShape from "./AbstractShape";
import { TriangleVectors } from "./types";

export default class Triangle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Triangle);
  triangleVectors: TriangleVectors;

  constructor (vectors: TriangleVectors) {
    this.triangleVectors = vectors;
  }

  render () {
    this.#renderer.render();
  }
}
