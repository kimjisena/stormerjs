import Element from "../types/Element";

export default function drawText (element: Element, ctx: CanvasRenderingContext2D): void {
  if (element.props.fill) {
    ctx.fillText(
      element.text, 
      element.origin.x, 
      element.origin.y, 
      element.maxWidth
    );
  } else {
    ctx.strokeText(
      element.text, 
      element.origin.x, 
      element.origin.y, 
      element.maxWidth
    );
  }
}
