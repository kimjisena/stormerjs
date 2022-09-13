import Surface from "../primitives/surface";
import Vector from "../primitives/Vector";
import StormTypes from "../utils/symbols";

class StormRenderer {
  #type: symbol;
  shape: any;
  #shouldUpdate: boolean = true;
  #shouldFill: boolean = false;
  #translateTo: Vector = new Vector(0, 0);
  #rotateBy: number = 0;
  #scaleBy: Vector = new Vector(1, 1);
  surface: Surface;
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
    const ctx = this.surface._surface;
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
        break;
      case StormTypes.Rectangle:
        break;
      case StormTypes.Triangle:
        break;
      case StormTypes.Circle:
        break;
      case StormTypes.Curve:
        break;
      case StormTypes.Arc:
        break;
      case StormTypes.Curve:
        break;
      case StormTypes.Bezier:
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
