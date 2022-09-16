import Layer from "../components/Layer";
import layerKey from "../utils/layerKey";
import Root from "../types/Root";
import drawElement, { prepare, cleanUp } from "../utils/drawElement";
import { applyProps, applyTransforms, syncLayer } from "../utils/apply";

const __DOM_LAYERS: Map<symbol, CanvasRenderingContext2D> = new Map();
const __STORMER_LAYERS: Layer[] = [];

let __PARENT: HTMLElement;
let STORMER_ROOT: CanvasRenderingContext2D;
let __index: number = 0;
let width: number;
let height: number;

const __syncLayers = () => {
  // apply layer props to elements
  for (let layer of __STORMER_LAYERS) {
    syncLayer(layer);
  }
}

const __renderLayers = () => {
  // render layers to their underlying DOM contexts
  for (let layer of __STORMER_LAYERS) {
    let ctx = __DOM_LAYERS.get(Symbol.for(layer.id));
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let element of layer.elements) {
      prepare(ctx);
      applyProps(element, ctx);
      applyTransforms(element, ctx);
      drawElement(element, ctx);
      cleanUp(ctx);
    }
    // append layer to STORMER_ROOT
    STORMER_ROOT.drawImage(ctx.canvas, 0, 0);
  }
}

const $__$: Root = {
  render () {
    // clear the STORMER_ROOT Layer
    STORMER_ROOT.clearRect(0, 0, STORMER_ROOT.canvas.width, STORMER_ROOT.canvas.height);
    __syncLayers();
    __renderLayers();
    return this;
  },
}

function createRoot (id: string, w: number = 300, h: number = 300): Root {
  STORMER_ROOT = document.createElement('canvas').getContext('2d');
  width = STORMER_ROOT.canvas.width = w;
  height = STORMER_ROOT.canvas.height = h;
  __PARENT = document.getElementById(id);
  __PARENT.appendChild(STORMER_ROOT.canvas);

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
  id = __index++;
  layer = new Layer(id);
  key = layerKey(id);

  __DOM_LAYERS.set(key, canvas.getContext('2d'));
  __STORMER_LAYERS.push(layer);

  return layer;
}

export { 
  createRoot,
  createLayer,
};
