import StormTypes from "./symbols";

export default function drawElement (element: any, ctx: CanvasRenderingContext2D) {
  switch(element.type) {
    case StormTypes.Point:
      // draw point
      ctx.moveTo(element.vector.x, element.vector.y);
      ctx.lineTo(element.vector.x + 1, element.vector.y + 1);
      ctx.stroke();
      break;

    case StormTypes.Line:
      // draw line
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
      break;

    case StormTypes.Rectangle:
      // draw rectangle
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
      break;

    case StormTypes.Triangle:
      // draw triangle
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
      break;

    case StormTypes.Ellipse:
      // draw an ellipse
      ctx.ellipse(
        element.center.x,
        element.center.y,
        element.width / 2,
        element.height / 2,
        0,
        0,
        2 * Math.PI,
        false,
      );

      if (element.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Circle:
      // draw circle
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
      break;

    case StormTypes.Arc:
      // draw an arc
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
      break;

    case StormTypes.Curve:
      // draw a quadratic bezier curve
      ctx.moveTo(element.from.x, element.from.y);
      ctx.quadraticCurveTo(
        element.anchor.x, 
        element.anchor.y, 
        element.to.x, 
        element.to.y
      );
      if (element.props.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
      break;

    case StormTypes.Bezier:
      // draw a cubic bezier curve
      ctx.moveTo(element.from.x, element.from.y);
      ctx.bezierCurveTo(
        element.anchorOne.x,
        element.anchorOne.y,
        element.anchorTwo.x,
        element.anchorTwo.y,
        element.to.x,
        element.to.y
      );
      if (element.props.fill) {
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
