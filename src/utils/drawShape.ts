import StormTypes from "./symbols";

export default function drawShape (shape: any, ctx: CanvasRenderingContext2D) {
  switch(shape.type) {
    case StormTypes.Point:
      // draw point
      ctx.moveTo(shape.vector.x, shape.vector.y);
      ctx.lineTo(shape.vector.x + 1, shape.vector.y + 1);
      ctx.stroke();
      break;

    case StormTypes.Line:
      // draw line
      ctx.moveTo(
        shape.lineVectors[0].x, 
        shape.lineVectors[0].y
        );
      for (let i = 1; i < shape.lineVectors.length; i++) {
        ctx.lineTo(
          shape.lineVectors[i].x, 
          shape.lineVectors[i].y
          );
      }
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Rectangle:
      // draw rectangle
      ctx.rect(
        shape.origin.x, 
        shape.origin.y, 
        shape.width, 
        shape.height
      );
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Triangle:
      // draw triangle
      ctx.moveTo(
        shape.triangleVectors.vec1.x, 
        shape.triangleVectors.vec1.y
        );
      ctx.lineTo(
        shape.triangleVectors.vec2.x, 
        shape.triangleVectors.vec2.y
        );
      ctx.lineTo(
        shape.triangleVectors.vec3.x, 
        shape.triangleVectors.vec3.y
        );
      ctx.closePath();
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Ellipse:
      // draw an ellipse
      ctx.ellipse(
        shape.center.x,
        shape.center.y,
        shape.width / 2,
        shape.height / 2,
        0,
        0,
        2 * Math.PI,
        false,
      );

      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Circle:
      // draw circle
      ctx.ellipse(
        shape.center.x, 
        shape.center.y, 
        shape.radius,
        shape.radius,
        0, 
        0, 2 * Math.PI, 
        false
      );
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Arc:
      // draw an arc
      let start = degToRad(shape.startAngle);
      let end = degToRad(shape.endAngle);
      ctx.arc(
        shape.center.x, 
        shape.center.y, 
        shape.radius, 
        start, end, 
        shape.counterclockwise
      );
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Curve:
      // draw a quadratic bezier curve
      ctx.moveTo(shape.from.x, shape.from.y);
      ctx.quadraticCurveTo(
        shape.anchor.x, 
        shape.anchor.y, 
        shape.to.x, 
        shape.to.y
      );
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Bezier:
      // draw a cubic bezier curve
      ctx.moveTo(shape.from.x, shape.from.y);
      ctx.bezierCurveTo(
        shape.anchorOne.x,
        shape.anchorOne.y,
        shape.anchorTwo.x,
        shape.anchorTwo.y,
        shape.to.x,
        shape.to.y
      );
      if (shape.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    default:
      break;
  }
}

function degToRad (deg: number): number {
  return (Math.PI / 180) * deg;
}


function prepare (ctx: CanvasRenderingContext2D): void {
  ctx.save();
  ctx.beginPath();
}

function cleanUp (ctx: CanvasRenderingContext2D): void {
  ctx.restore();
}

export { prepare, cleanUp };
