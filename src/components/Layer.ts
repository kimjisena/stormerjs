import Props from "../core/Props";
import Transforms from "../core/Transforms";
import Element from "../types/Element";

export default class Layer {
  id: string;
  props: Props = new Props();
  transforms: Transforms = new Transforms();
  elements: Set<Element> = new Set();

  constructor (id: number) {
    this.id = `Storm.Layer-${id}`;
  }

  addElement (element: Element): Layer {
    this.elements.add(element);
    return this;
  }

  removeElement (element: Element): Layer {
    this.elements.delete(element);
    return this;
  }

  clearLayer (): Layer {
    this.elements.clear();
    return this;
  }
}
