import Element from "../types/Element";

export default function drawEllipse (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.ellipse(
    element.center.x,
    element.center.y,
    element.width / 2,
    element.height / 2,
    0,
    0,
    2 * Math.PI,
    false,
  );

  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
