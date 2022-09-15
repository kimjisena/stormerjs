import StormTypes from "../utils/symbols";
import Layer from "../types/Layer";
import { LineVectors } from "../types/Vector";
import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Line {
  type: symbol = StormTypes.Ellipse;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  lineVectors: LineVectors;

  constructor (vectors: LineVectors) {
    if (vectors.length < 2) {
      throw new Error("At least two vectors are required to draw a line.");
    }
    this.lineVectors = vectors;
  }

  attachTo (layer: Layer): Line {
    layer.addShape(this);
    return this;
  }

  setTransforms (): Transforms {
    return this.transforms;
  }

  setProps (): Props {
    return this.props;
  }
}
