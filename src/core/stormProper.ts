import Layer from "../components/Layer";
import layerKey from "../utils/layerKey";
import Root from "../types/Root";
import drawShape, { prepare, cleanUp } from "../utils/drawShape";
import { applyProps, applyTransforms, syncLayer } from "../utils/apply";

const __DOM_LAYERS: Map<symbol, CanvasRenderingContext2D> = new Map();
const __INTERNAL_LAYERS: Layer[] = [];

let __PARENT: HTMLElement;
let ROOT: HTMLCanvasElement;
let __index: number = 0;
let width: number;
let height: number;

const __syncLayers = () => {
  // apply layer props to shapes
  for (let layer of __INTERNAL_LAYERS) {
    syncLayer(layer);
  }
}

const __renderLayers = () => {
  // render layers to the dom
  for (let layer of __INTERNAL_LAYERS) {
    let ctx = __DOM_LAYERS.get(Symbol.for(layer.id));
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let shape of layer.shapes) {
      prepare(ctx);
      applyProps(shape, ctx);
      applyTransforms(shape, ctx);
      drawShape(shape, ctx);
      cleanUp(ctx);
    }
  }
}

const $__$: Root = {
  render () {
    __syncLayers();
    __renderLayers();
    return this;
  },
}

function createRoot (id: string, w: number = 300, h: number = 300): Root {
  ROOT = document.createElement('canvas');
  width = ROOT.width = w;
  height = ROOT.height = h;
  __PARENT = document.getElementById(id);

  return $__$;
}

function createLayer (): Layer {
  let key: symbol, 
      id: number, 
      layer: Layer, 
      canvas: HTMLCanvasElement;

  canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  if(__index === 0) {
    __PARENT.appendChild(canvas);
  }

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
