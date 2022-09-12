import Point from "./Point";
import Shape from "./Shape";

export default class Line extends Shape{
  points: Array<Point>;

  constructor (points: Array<Point>) {
    super();
    this.points = points;
  }
}
