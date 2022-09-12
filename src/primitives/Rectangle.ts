import Point from "./Point";
import Shape from "./Shape";

export default class Rectangle extends Shape {
  origin: Point;
  width: number;
  height: number;

  constructor (origin: Point, width: number, height: number) {
    super();
    
    this.origin = origin;
    this.width = width;
    this.height = height;
  }
}
