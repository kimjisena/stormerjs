import Element from "../types/Element";

export default function drawLine (element: Element, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(
    element.lineVectors[0].x, 
    element.lineVectors[0].y
    );
  for (let i = 1; i < element.lineVectors.length; i++) {
    ctx.lineTo(
      element.lineVectors[i].x, 
      element.lineVectors[i].y
      );
  }
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
