import Shape from "./Shape";

export default class Point extends Shape {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // draw point (1 pixel)
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 1, this.y + 1);
    ctx.stroke();

    // restore Canvas state
    ctx.restore();

    // call draw on the surface
    this.surface.renderGroups();
  }
}
