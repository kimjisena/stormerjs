import StormTypes from "../utils/symbols";
import { StormRenderer } from "../renderer/renderer";
import { Vector, AbstractShape, Surface } from "./types";

export default class Arc implements AbstractShape {
  #renderer: StormRenderer = new StormRenderer(StormTypes.Arc);

  surface: Surface;
  center: Vector;
  radius: number;
  startAngle: number;
  endAngle: number;
  direction: boolean;

  constructor (
    center: Vector, 
    radius: number, 
    startAngle: number, 
    endAngle: number, 
    direction?: boolean
  ) {
    this.center = center;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.direction = direction;
    this.#renderer.shape = this;
  }

  attach (surface: Surface): Arc {
    this.surface = surface;
    return this;
  }

  render (): void {
    if (!this.surface) {
      throw new Error('Can\'t draw a detached shape. Attach surface.')
    }
    this.#renderer.render();
  }
  shouldUpdate (): boolean {
    return this.#renderer.shouldUpdate;
  }
}
