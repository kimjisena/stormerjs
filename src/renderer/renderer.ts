import Vector from "../primitives/Vector";
import StormTypes from "../utils/symbols";
import { AbstractShape } from "../primitives/types";

class StormRenderer {
  #type: symbol;
  #shouldUpdate: boolean = true;
  #shouldFill: boolean = false;
  #translateTo: Vector = new Vector(0, 0);
  #rotateBy: number = 0;
  #scaleBy: Vector = new Vector(1, 1);

  shape: AbstractShape;
  config: Map<string, any>;
  transformOrder: Array<number> = new Array(3).fill(null);

  constructor (type: symbol) {
    this.#type = type;
  }

  configure (prop: string, value: any) {
    // configure shape-wise properties e.g: fillStyle
    this.config.set(prop, value);
    
    // set status flag
    this.#shouldUpdate = true;
  }

  degToRad (deg: number) {
    return (Math.PI / 180) * deg
  }

  translate () {
    // schedule translation
    this.transformOrder.push(1);
  }

  rotate () {
    // schedule rotation
    this.transformOrder.push(2);
  }

  scale () {
    // schedule scaling
    this.transformOrder.push(3);
  }

  render () {
    const ctx = this.shape.surface._;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // set the matrix transform
    this.transformOrder.forEach(transform => {
      switch (transform) {
        case 1:
          ctx.translate(this.translateTo.x, this.translateTo.y);
          break;
        case 2:
          ctx.rotate(this.rotateBy);
          break;
        case 3:
          ctx.scale(this.scaleBy.x, this.scaleBy.y);
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
        if (this.shouldFill) {
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
        if (this.shouldFill) {
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

        if (this.shouldFill) {
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
        if (this.shouldFill) {
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
          this.shape.direction
        );
        if (this.shouldFill) {
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
        if (this.shouldFill) {
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
        if (this.shouldFill) {
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

    // reset status flag
    this.#shouldUpdate = false;
  }

  set shouldUpdate (value: boolean) {
    this.#shouldUpdate = value;
  }

  get shouldUpdate () {
    return this.#shouldUpdate;
  }

  set shouldFill (value: boolean) {
    this.#shouldFill = value;
  }

  get shouldFill () {
    return this.#shouldFill;
  }

  set translateTo (to: Vector) {
    this.#translateTo = to;
    this.#shouldUpdate = true;
  }

  get translateTo () {
    return this.#translateTo;
  }

  set rotateBy (by: number) {
    this.#rotateBy = this.degToRad(by);
    this.#shouldUpdate = true;
  }

  get rotateBy () {
    return this.#rotateBy;
  }

  set scaleBy (by: Vector) {
    this.#scaleBy = by;
    this.#shouldUpdate = true;
  }

  get scaleBy () {
    return this.#scaleBy;
  }
}

export { StormRenderer }
