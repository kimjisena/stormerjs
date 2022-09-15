import Circle from "../components/elements/Circle";

export default function drawCircle (element: Circle, ctx: CanvasRenderingContext2D): void {
  ctx.ellipse(
    element.center.x, 
    element.center.y, 
    element.radius,
    element.radius,
    0, 
    0, 2 * Math.PI, 
    false
  );
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
