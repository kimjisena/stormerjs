export default class Vector  {
  x: number;
  y: number;
  
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static from (x: number, y: number): Vector {
    return new Vector(x, y);
  }
}
