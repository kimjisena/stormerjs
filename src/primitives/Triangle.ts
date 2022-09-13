import Vector from "./Vector";
import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";

export default class Triangle {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Triangle);
  vectors: {vec1: Vector, vec2: Vector, vec3: Vector};

  constructor (vectors: {vec1: Vector, vec2: Vector, vec3: Vector}) {
    this.vectors = vectors;
  }

  render () {
    this.#renderer.render();
  }
}
