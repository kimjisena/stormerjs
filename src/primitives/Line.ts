import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";

export default class Line {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Line);
  vectors: Array<Vector>;

  constructor (vectors: Array<Vector>) {
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.vectors = vectors;
  }

  render () {
    this.#renderer.render();
  }
}
