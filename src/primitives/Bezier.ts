import Point from "./Point";
import Shape from "./Shape";

export default class Bezier extends Shape {
  anchorOne: Point;
  anchorTwo: Point;
  from: Point;
  to: Point;

  constructor (anchorOne: Point, anchorTwo: Point, from: Point, to: Point) {
    super();
    
    this.anchorOne = anchorOne;
    this.anchorTwo = anchorTwo;
    this.from = from;
    this.to = to;
  }
}
