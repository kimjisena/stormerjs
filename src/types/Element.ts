import { Props, Transforms } from "./Settings";
import Layer from "./Layer";

export default interface Element {
  type: symbol;
  props: Props;
  transforms: Transforms;

  attach (layer: Layer): Element;
  setTransforms (): Transforms;
  setProps (): Props;
}
