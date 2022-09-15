import Arc from "../components/elements/Arc";

function degToRad (deg: number): number {
  return (Math.PI / 180) * deg;
}

export default function drawArc (element: Arc, ctx: CanvasRenderingContext2D): void {
  let start = degToRad(element.startAngle);
  let end = degToRad(element.endAngle);
  ctx.arc(
    element.center.x, 
    element.center.y, 
    element.radius, 
    start, end, 
    element.counterclockwise
  );
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
