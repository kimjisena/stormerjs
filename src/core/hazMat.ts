import Layer from "../components/Layer";
import layerKey from "../utils/layerKey";
import Root from "../types/Root";
import drawShape, { prepare, cleanUp } from "../utils/drawShape";
import { createRectangle } from "../index";

const __DOM_LAYERS: Map<symbol, CanvasRenderingContext2D> = new Map();
const __INTERNAL_LAYERS: Layer[] = [];

let ROOT: HTMLCanvasElement;
let __index: number = 0;
let width: number;
let height: number;

const $__$: Root = {
  render () {
    let ctx = ROOT.getContext('2d');
    // draw rectangle
    prepare(ctx);
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    let rect = createRectangle(10, 10, 140, 140);
    drawShape(rect, ctx);
    cleanUp(ctx);

    // draw circle
    prepare(ctx);
    ctx.arc(200, 150, 50, 0, 2 * Math.PI);
    ctx.lineWidth = 6;
    ctx.stroke();
    cleanUp(ctx);

    return this;
  },
}

function createRoot (id: string, w: number = 300, h: number = 300): Root {
  ROOT = document.createElement('canvas');
  width = ROOT.width = w;
  height = ROOT.height = h;
  document.getElementById(id).appendChild(ROOT);

  return $__$;
}

function createLayer () {
  let key: symbol, 
      id: number, 
      layer: Layer, 
      canvas: HTMLCanvasElement;

  canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  id = __index++;
  layer = new Layer(id);
  key = layerKey(id);

  __DOM_LAYERS.set(key, canvas.getContext('2d'));
  __INTERNAL_LAYERS.push(layer);

  return layer;
}

export { 
  createRoot,
  createLayer,
};
