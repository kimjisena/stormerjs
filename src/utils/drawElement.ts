import StormTypes from "./symbols";
import drawImage from "./drawImage";
import drawText from "./drawText";
import drawBezier from "./drawBezier";
import drawCurve from "./drawCurve";
import drawArc from "./drawArc";
import drawCircle from "./drawCircle";
import drawPoint from "./drawPoint";
import drawLine from "./drawLine";
import drawRectangle from "./drawRectangle";
import drawTriangle from "./drawTriangle";
import drawEllipse from "./drawEllipse";
import Element from "../types/Element";

export default function drawElement (element: Element, ctx: CanvasRenderingContext2D) {
  switch(element.type) {
    case StormTypes.Point:
      drawPoint(element, ctx);
      break;

    case StormTypes.Line:
      drawLine(element, ctx);
      break;

    case StormTypes.Rectangle:
      drawRectangle(element, ctx);
      break;

    case StormTypes.Triangle:
      drawTriangle(element, ctx);
      break;

    case StormTypes.Ellipse:
      drawEllipse(element, ctx);
      break;

    case StormTypes.Circle:
      drawCircle(element, ctx);
      break;

    case StormTypes.Arc:
      drawArc(element, ctx);
      break;

    case StormTypes.Curve:
      drawCurve(element, ctx);
      break;

    case StormTypes.Bezier:
      drawBezier(element, ctx);
      break;

    case StormTypes.Text:
      drawText(element, ctx);
      break;

    case StormTypes.Image:
      if (element.hasLoaded) {
        drawImage(element, ctx);
        break;
      }
      element.image.addEventListener('load', () => {
        element.hasLoaded = true;
        drawImage(element, ctx);
      });
      break;

    default:
      break;
  }
}

function prepare (ctx: CanvasRenderingContext2D): void {
  ctx.save();
  ctx.beginPath();
}

function cleanUp (ctx: CanvasRenderingContext2D): void {
  ctx.restore();
}

export { prepare, cleanUp };
