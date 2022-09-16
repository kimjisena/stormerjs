import Element from "../types/Element";

export default function drawPoint (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(element.vector.x, element.vector.y);
  ctx.lineTo(element.vector.x + 1, element.vector.y + 1);
  ctx.stroke();
}
