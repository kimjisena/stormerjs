import Props from "../core/Props";
import Transforms from "../core/Transforms";
import Element from "../types/Element";

export default class Layer {
  id: string;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  shapes: Set<Element> = new Set();

  constructor (id: number) {
    this.id = `Storm.Layer-${id}`;
  }

  addShape (shape: Element): Layer {
    this.shapes.add(shape);
    return this;
  }

  removeShape (shape: Element): Layer {
    this.shapes.delete(shape);
    return this;
  }
}
