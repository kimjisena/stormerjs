import STORM_SYMBOLS from "./symbols";
import Element from "../types/Element";
import Layer from "../types/Layer";

function applyProps (element: Element, ctx: CanvasRenderingContext2D) {
  for (let [key, value] of element.props.propsMap) {
    ctx[key] = value;
  }
}

function applyTransforms (element: Element, ctx: CanvasRenderingContext2D) {
  // set the matrix transform
  element.transforms.transformActions.forEach(transform => {
    switch (transform.type) {
      case STORM_SYMBOLS.Translate:
        ctx.translate(transform.payload.x, transform.payload.y);
        break;
      case STORM_SYMBOLS.Rotate:
        ctx.rotate(transform.payload);
        break;
      case STORM_SYMBOLS.Scale:
        ctx.scale(transform.payload.x, transform.payload.y);
        break;
      default:
        break;
    }
  });
}

function syncLayer (layer: Layer) {
  let layerFill = layer.props.fill;
  let layerProps = layer.props.propsMap;

  for (let element of layer.elements) {
    // don't override the fill property if it is set on element
    if (layerFill && !(element.setProps().strictNotFill)) {
      element.setProps().shouldFill(layerFill);
    }

    for (let [key, value] of layerProps) {
      if (!element.setProps().propsMap.has(key)) {
        element.setProps()[key](value);
      }
    }
  }
}

export { applyProps, applyTransforms, syncLayer }