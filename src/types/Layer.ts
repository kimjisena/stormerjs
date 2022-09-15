import { Props, Transforms } from "./Settings";
import Element from "./Element";

export default interface Layer {
  id: string;
  props: Props;
  transforms: Transforms;
  shapes: Set<Element>;

  addShape (shape: Element): Layer;
  removeShape (shape: Element): Layer;
}
