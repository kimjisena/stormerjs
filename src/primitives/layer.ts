import { AbstractShape } from "./types";

const CANVAS_LAYERS_MAP: Map<CanvasRenderingContext2D, Array<Layer>> = new Map();

function resetContext (ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawLayers (ctx: CanvasRenderingContext2D) {
  // get the layers on this context
  let layers = CANVAS_LAYERS_MAP.get(ctx);

  resetContext(ctx);

  for (let layer of layers) {
    layer.render();
  }
}

export default class Layer {
  _: CanvasRenderingContext2D;
  #shapes: Set<AbstractShape> = new Set();

  constructor (canvas: HTMLCanvasElement) {
    let ctx = canvas.getContext('2d');
    this._ = ctx;
    
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

  clearCanvas (): void {
    resetContext(this._);
  }

  clearLayer (): Layer {
    this.#shapes = new Set();
    drawLayers(this._);
    return this;
  }

  render (): Layer {
    for (let shape of this.#shapes) {
      shape.render();
    }
    return this;
  }

}
