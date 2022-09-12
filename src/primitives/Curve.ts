import Point from "./Point";
import Shape from "./Shape";

export default class Curve extends Shape {
  anchor: Point;
  from: Point;
  to: Point;

  constructor (anchor: Point, from: Point, to: Point) {
    super();
    
    this.anchor = anchor;
    this.from = from;
    this.to = to;
  }
}
