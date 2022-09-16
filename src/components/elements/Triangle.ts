import STORMER_SYMBOLS from "../../utils/symbols";
import Layer from "../../types/Layer";
import { TriangleVectors } from "../../types/Vector";
import Props from "../../core/Props";
import Transforms from "../../core/Transforms";

export default class Triangle {
  type: symbol = STORMER_SYMBOLS.Triangle;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  triangleVectors: TriangleVectors;

  constructor (vectors: TriangleVectors) {
    this.triangleVectors = vectors;
  }
  
  attachTo (layer: Layer): Triangle {
    layer.addElement(this);
    return this;
  }

  setTransforms (): Transforms {
    return this.transforms;
  }

  setProps (): Props {
    return this.props;
  }
}
