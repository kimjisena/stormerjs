import Point from "./Point";
import Shape from "./Shape";
import StormTypes from "../utils/symbols";

export default class Bezier extends Shape {
  anchorOne: Point;
  anchorTwo: Point;
  from: Point;
  to: Point;

  constructor (anchorOne: Point, anchorTwo: Point, from: Point, to: Point) {
    super(StormTypes.Bezier);
    
    this.anchorOne = anchorOne;
    this.anchorTwo = anchorTwo;
    this.from = from;
    this.to = to;
  }
}
