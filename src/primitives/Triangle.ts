import Point from "./Point";
import Shape from "./Shape";

export default class Triangle extends Shape {
  points: {p1: Point, p2: Point, p3: Point};

  constructor (points: {p1: Point, p2: Point, p3: Point}) {
    super();
    
    this.points = points;
  }
}
