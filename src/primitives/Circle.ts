import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface } from "./types";

export default class Circle implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Circle);

  surface: Surface;
  center: Vector;
  radius: number;

  constructor (center: Vector, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  render (): void {
    this.#renderer.render();
  }

  shouldUpdate (): boolean {
    return this.#renderer.shouldUpdate;
  }
}
