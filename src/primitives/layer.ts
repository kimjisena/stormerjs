import { AbstractShape } from "../types";
import Props from "../utils/props";

const CANVAS_LAYERS_MAP: Map<CanvasRenderingContext2D, Array<Layer>> = new Map();

function resetContext (ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawLayers (ctx: CanvasRenderingContext2D) {
  // get the layers on this context
  let layers = CANVAS_LAYERS_MAP.get(ctx);

  resetContext(ctx);

  for (let layer of layers) {
    layer._UNSTABLE__volatile__draw();
  }
}

export default class Layer {
  __context: CanvasRenderingContext2D;
  #shapes: Set<AbstractShape> = new Set();
  #__props__: Props = new Props();
  #__mount: boolean = true;

  constructor (canvas: HTMLCanvasElement) {
    let ctx = canvas.getContext('2d');
    this.__context = ctx;
    
    // add this layer to the map
    if (CANVAS_LAYERS_MAP.has(ctx)) {
      CANVAS_LAYERS_MAP.get(ctx).push(this);
    } else {
      CANVAS_LAYERS_MAP.set(ctx, [this]);
    }
  }

  addShape (shape: AbstractShape): Layer {
    this.#shapes.add(shape);
    return this;
  }

  setProps (): Props {
    return this.#__props__;
  }

  clearCanvas (): void {
    resetContext(this.__context);
  }

  clearLayer (): Layer {
    this.#shapes = new Set();
    drawLayers(this.__context);
    return this;
  }

  _UNSTABLE__volatile__draw (): void {
    let layerProps = this.#__props__.propsMap;
    let layerFill = this.#__props__.fill;
    // save canvas state
    this.__context.save();

    // apply layer props e.g. fillStyle
    for (let [key, value] of layerProps) {
      this.__context[key] = value;
    }

    for (let shape of this.#shapes) {
      // don't override the fill property if it is set on shape
      if (layerFill && !(shape.setProps().strictNotFill)) {
        shape.setProps().shouldFill(layerFill);
      }
      shape.render();
    }

    // restore canvas state
    this.__context.restore();
  }

  render (): Layer {
    if (this.#__mount) {
      this._UNSTABLE__volatile__draw();
      this.#__mount = false;
    } else {
      drawLayers(this.__context);
    }
    return this;
  }
}
