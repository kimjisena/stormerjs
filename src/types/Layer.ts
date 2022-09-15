import { Props, Transforms } from "./Settings";
import Element from "./Element";

export default interface Layer {
  id: string;
  props: Props;
  transforms: Transforms;
  elements: Set<Element>;

  addElement (element: Element): Layer;
  removeElement (element: Element): Layer;
  clearLayer (): Layer;
}
