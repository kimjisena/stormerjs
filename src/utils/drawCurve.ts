import Element from "../types/Element";

export default function drawCurve (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(element.from.x, element.from.y);
  ctx.quadraticCurveTo(
    element.anchor.x, 
    element.anchor.y, 
    element.to.x, 
    element.to.y
  );
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
