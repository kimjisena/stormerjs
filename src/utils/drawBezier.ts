import Element from "../types/Element";

export default function drawBezier (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(element.from.x, element.from.y);
  ctx.bezierCurveTo(
    element.anchorOne.x,
    element.anchorOne.y,
    element.anchorTwo.x,
    element.anchorTwo.y,
    element.to.x,
    element.to.y
  );
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
