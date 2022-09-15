import { Props, Transforms } from "./Settings";
import Layer from "./Layer";

export default interface Element {
  type: symbol;
  props: Props;
  transforms: Transforms;

  attachTo (layer: Layer): Element;
  setTransforms (): Transforms;
  setProps (): Props;
}
