import STORMER_SYMBOLS from "../utils/symbols";
import degToScale from "../utils/degToScale";
import Vector from "../components/Vector";


function createAction(type: symbol, payload: any): any {
  return { type, payload };
}

export default class Transforms {
  #__transforms__: Array<any> = [];

  degToRad (deg: number): number {
    return (Math.PI / 180) * deg
  }

  translate (x: number, y: number): Transforms {
    let vector = new Vector(x, y);
    this.#__transforms__.push(createAction(STORMER_SYMBOLS.Translate, vector));
    return this;
  }

  rotate (angle: number): Transforms {
    this.#__transforms__.push(createAction(STORMER_SYMBOLS.Rotate, this.degToRad(angle)));
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