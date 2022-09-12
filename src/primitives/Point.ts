import Shape from "./Shape";

export default class Point extends Shape {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  draw () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw point
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.closePath();

    // restore Canvas state
    ctx.restore();

    // call draw on the surface
    this.surface.renderGroups();
  }
}
