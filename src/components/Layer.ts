import Props from "../core/Props";
import Transforms from "../core/Transforms";

export default class Layer {
  id: string;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  shapes: Set<any> = new Set();

  constructor (id: number) {
    this.id = `Storm.Layer-${id}`;
  }

  addShape (shape: any) {
    this.shapes.add(shape);
  }
}
