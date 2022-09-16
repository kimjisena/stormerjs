import Layer from "../components/Layer";
import layerKey from "../utils/layerKey";
import Root from "../types/Root";
import drawElement, { prepare, cleanUp } from "../utils/drawElement";
import { applyProps, applyTransforms, syncLayer } from "../utils/apply";

const __DOM_LAYERS: Map<symbol, CanvasRenderingContext2D> = new Map();
const __STORMER_LAYERS: Layer[] = [];

let STORMER_ROOT: CanvasRenderingContext2D;
let __index: number = 0;
let width: number;
let height: number;

const __renderLayers = () => {
  // render layers to their underlying contexts
  for (let layer of __STORMER_LAYERS) {
    syncLayer(layer);
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
  render (): Root {
    // clear the STORMER_ROOT Layer
    STORMER_ROOT.clearRect(0, 0, STORMER_ROOT.canvas.width, STORMER_ROOT.canvas.height);
    __renderLayers();
    return this;
  },
  addEventListener (type: string, listener: (ev: any) => any, options?: any): Root {
    STORMER_ROOT.canvas.addEventListener(type, listener, options);
    return this;
  },
  removeEventListener (type: string, listener: (ev: any) => any, options?: any): Root {
    STORMER_ROOT.canvas.removeEventListener(type, listener, options);
    return this;
  },
  unstable_GetUnderlyingContext (): CanvasRenderingContext2D {
    return STORMER_ROOT;
  },
}

function createRoot (id: string, w: number = 300, h: number = 300): Root {
  STORMER_ROOT = (document.getElementById(id) as HTMLCanvasElement).getContext('2d');
  width = STORMER_ROOT.canvas.width = w;
  height = STORMER_ROOT.canvas.height = h;
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
