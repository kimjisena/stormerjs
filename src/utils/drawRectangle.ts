import Element from "../types/Element";

export default function drawRectangle (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.rect(
    element.origin.x, 
    element.origin.y, 
    element.width, 
    element.height
  );
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
