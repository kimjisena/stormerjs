import StormTypes from "./symbols";
import Element from "../types/Element";
import Layer from "../types/Layer";

function applyProps (shape: Element, ctx: CanvasRenderingContext2D) {
  for (let [key, value] of shape.props.propsMap) {
    ctx[key] = value;
  }
}

function applyTransforms (shape: Element, ctx: CanvasRenderingContext2D) {
  // set the matrix transform
  shape.transforms.transformActions.forEach(transform => {
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
}

function syncLayer (layer: Layer) {
  let layerFill = layer.props.fill;
  let layerProps = layer.props.propsMap

  for (let shape of layer.shapes) {
    // don't override the fill property if it is set on shape
    if (layerFill && !(shape.setProps().strictNotFill)) {
      shape.setProps().shouldFill(layerFill);
    }

    for (let [key, value] of layerProps) {
      if (!shape.setProps().propsMap.has(key)) {
        shape.setProps()[key](value);
      }
    }
  }
}

export { applyProps, applyTransforms, syncLayer }