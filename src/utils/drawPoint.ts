import Point from "../components/elements/Point";

export default function drawPoint (element: Point, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(element.vector.x, element.vector.y);
  ctx.lineTo(element.vector.x + 1, element.vector.y + 1);
  ctx.stroke();
}
