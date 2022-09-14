import StormTypes from "../utils/symbols";
import { AbstractShape } from "../primitives/types";
import Props from "../utils/props";
import Transforms from "../utils/trasform";

class StormRenderer {
  #type: symbol;
  #props: Props = new Props();
  #transforms: Transforms = new Transforms();

  shape: AbstractShape;

  constructor (type: symbol) {
    this.#type = type;
  }

  getPropsObject (): Props {
    return this.#props;
  }

  getTransformsObject (): Transforms {
    return this.#transforms;
  }

  degToRad (deg: number) {
    return (Math.PI / 180) * deg
  }

  render (fill = false) {
    const ctx = this.shape.surface._;

    // save Canvas state
    ctx.save();

    // apply props e.g. fillStyle
    for (let [key, value] of this.#props.propsMap) {
      ctx[key] = value;
    }

    // set the matrix transform
    this.#transforms.transformActions.forEach(transform => {
      switch (transform.type) {
        case StormTypes.Translate:
          ctx.translate(transform.payload.x, transform.payload.y);
          break;
        case StormTypes.Rotate:
          ctx.rotate(transform.payload);
          break;
        case StormTypes.Scale:
          ctx.scale(transform.payload.x, transform.payload.y);
          break;
        default:
          break;
      }
    });


    // TODO: Render shape
    switch(this.#type) {
      case StormTypes.Point:
        // draw point
        ctx.beginPath();
        ctx.moveTo(this.shape.vector.x, this.shape.vector.y);
        ctx.lineTo(this.shape.vector.x + 1, this.shape.vector.y + 1);
        ctx.stroke();
        break;

      case StormTypes.Line:
        // draw line
        ctx.beginPath();
        ctx.moveTo(
          this.shape.lineVectors[0].x, 
          this.shape.lineVectors[0].y
          );
        for (let i = 1; i < this.shape.lineVectors.length; i++) {
          ctx.lineTo(
            this.shape.lineVectors[i].x, 
            this.shape.lineVectors[i].y
            );
        }
        ctx.stroke();
        break;

      case StormTypes.Rectangle:
        // draw rectangle
        ctx.rect(
          this.shape.origin.x, 
          this.shape.origin.y, 
          this.shape.width, 
          this.shape.height
        );
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Triangle:
        // draw triangle
        ctx.beginPath();
        ctx.moveTo(
          this.shape.triangleVectors.vec1.x, 
          this.shape.triangleVectors.vec1.y
          );
        ctx.lineTo(
          this.shape.triangleVectors.vec2.x, 
          this.shape.triangleVectors.vec2.y
          );
        ctx.lineTo(
          this.shape.triangleVectors.vec3.x, 
          this.shape.triangleVectors.vec3.y
          );
        ctx.closePath();
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Ellipse:
        // draw an ellipse
        ctx.beginPath();
        ctx.ellipse(
          this.shape.center.x,
          this.shape.center.y,
          this.shape.width / 2,
          this.shape.height / 2,
          0,
          0,
          2 * Math.PI,
          false,
        );

        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Circle:
        // draw circle
        ctx.beginPath();
        ctx.ellipse(
          this.shape.center.x, 
          this.shape.center.y, 
          this.shape.radius,
          this.shape.radius,
          0, 
          0, 2 * Math.PI, 
          false
        );
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Arc:
        // draw an arc
        ctx.beginPath();
        let start = this.degToRad(this.shape.startAngle);
        let end = this.degToRad(this.shape.endAngle);
        ctx.arc(
          this.shape.center.x, 
          this.shape.center.y, 
          this.shape.radius, 
          start, end, 
          this.shape.counterclockwise
        );
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Curve:
        // draw a quadratic bezier curve
        ctx.beginPath();
        ctx.moveTo(this.shape.from.x, this.shape.from.y);
        ctx.quadraticCurveTo(
          this.shape.anchor.x, 
          this.shape.anchor.y, 
          this.shape.to.x, 
          this.shape.to.y
        );
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      case StormTypes.Bezier:
        // draw a cubic bezier curve
        ctx.beginPath();
        ctx.moveTo(this.shape.from.x, this.shape.from.y);
        ctx.bezierCurveTo(
          this.shape.anchorOne.x,
          this.shape.anchorOne.y,
          this.shape.anchorTwo.x,
          this.shape.anchorTwo.y,
          this.shape.to.x,
          this.shape.to.y
        );
        if (fill) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
        break;

      default:
        break;
    }
    
    // restore Canvas state
    ctx.restore();

    return this.shape;
  }
}

export { StormRenderer }
