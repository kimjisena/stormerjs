import { Props, Transforms } from "./Settings";

export default interface Layer {
  id: string;
  props: Props;
  transforms: Transforms;
  shape: Set<any>;

  addShape (shape: any): Layer;
}
