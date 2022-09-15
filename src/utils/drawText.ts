import Text from "../components/elements/Text";

export default function drawText (element: Text, ctx: CanvasRenderingContext2D): void {
  if (element.props.fill) {
    ctx.fillText(
      element.text, 
      element.pos.x, 
      element.pos.y, 
      element.maxWidth
    );
  } else {
    ctx.strokeText(
      element.text, 
      element.pos.x, 
      element.pos.y, 
      element.maxWidth
    );
  }
}
