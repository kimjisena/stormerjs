import Triangle from "../components/elements/Triangle";

export default function drawTriangle (element: Triangle, ctx: CanvasRenderingContext2D): void {
  ctx.moveTo(
    element.triangleVectors.vec1.x, 
    element.triangleVectors.vec1.y
    );
  ctx.lineTo(
    element.triangleVectors.vec2.x, 
    element.triangleVectors.vec2.y
    );
  ctx.lineTo(
    element.triangleVectors.vec3.x, 
    element.triangleVectors.vec3.y
    );
  ctx.closePath();
  if (element.props.fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
