import Point from "./Point";
import Shape from "./Shape";

export default class Arc extends Shape {
  center: Point;
  radius: number;
  start: number;
  end: number;
  direction: boolean;

  constructor (center: Point, radius: number, start: number, end: number, direction: boolean) {
    super();
    
    this.center = center;
    this.radius = radius;
    this.start = start;
    this.end = end;
    this.direction = direction;
  }
}
