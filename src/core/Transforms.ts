import StormTypes from "../utils/symbols";
import Vector from "../components/Vector";

function createAction(type: symbol, payload: number | Vector): any {
  return { type, payload };
}

export default class Transforms {
  #__transforms__: Array<any> = [];

  degToRad (deg: number): number {
    return (Math.PI / 180) * deg
  }

  translate (x: number, y: number): Transforms {
    let vector = new Vector(x, y);
    this.#__transforms__.push(createAction(StormTypes.Translate, vector));
    return this;
  }

  rotate(angle: number): Transforms {
    this.#__transforms__.push(createAction(StormTypes.Rotate, this.degToRad(angle)));
    return this;
  }

  scale(x: number, y: number): Transforms {
    let vector = new Vector(x, y);
    this.#__transforms__.push(createAction(StormTypes.Scale, vector));
    return this;
  }

  get transformActions (): Array<any> {
    return this.#__transforms__;
  }
}