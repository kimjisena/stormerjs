import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import type AbstractShape from "./AbstractShape";
import { LineVectors } from "./types";

export default class Line implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Line);
  lineVectors: LineVectors;

  constructor (vectors: LineVectors) {
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.lineVectors = vectors;
  }

  render () {
    this.#renderer.render();
  }
}
