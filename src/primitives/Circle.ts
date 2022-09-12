import Point from "./Point";

export default class Circle {
  center: Point;
  radius: number;

  constructor (center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }
}
