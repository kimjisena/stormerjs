import Point from "./Point";
import Shape from "./Shape";
import StormTypes from "../utils/symbols";

export default class Curve extends Shape {
  anchor: Point;
  from: Point;
  to: Point;

  constructor (anchor: Point, from: Point, to: Point) {
    super(StormTypes.Curve);
    
    this.anchor = anchor;
    this.from = from;
    this.to = to;
  }
}
