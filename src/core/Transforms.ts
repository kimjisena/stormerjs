import STORMER_SYMBOLS from "../utils/symbols";
import degToRad from "../utils/degToRad";
import Vector from "../components/Vector";


function createAction(type: symbol, payload: any): any {
  return { type, payload };
}

export default class Transforms {
  #__transforms__: Array<any> = [];

  translate (x: number, y: number): Transforms {
    let vector = new Vector(x, y);
    this.#__transforms__.push(createAction(STORMER_SYMBOLS.Translate, vector));
    return this;
  }

  rotate (angle: number): Transforms {
    this.#__transforms__.push(createAction(STORMER_SYMBOLS.Rotate, degToRad(angle)));
    return this;
  }

  scale (x: number, y: number): Transforms {
    let vector = new Vector(x, y);
    this.#__transforms__.push(createAction(STORMER_SYMBOLS.Scale, vector));
    return this;
  }

  get transformActions (): Array<any> {
    return this.#__transforms__;
  }
}