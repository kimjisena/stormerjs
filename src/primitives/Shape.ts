import Surface from "./surface";

export default class Shape {
  surface: Surface;
  config: Map<string, any>;
  #shouldUpdate: boolean = true;
  #shouldFill: boolean = false;
  
  configure (prop: string, value: any) {
    // configure shape-wise properties e.g: fillStyle
    this.config.set(prop, value);
    
    // set status flag
    this.#shouldUpdate = true;
  }

  set shouldUpdate (value: boolean) {
    this.#shouldUpdate = value;
  }

  get shouldUpdate () {
    return this.#shouldUpdate;
  }

  render () {
    const ctx = this.surface._surface;
    // save Canvas state
    ctx.save();

    // apply config e.g. fillStyle
    for (let [key, value] of this.config) {
      ctx[key] = value;
    }

    // TODO: Render shape

    // restore Canvas state
    ctx.restore();

    // reset status flag
    this.#shouldUpdate = false;
  }

  set shouldFill (value: boolean) {
    this.#shouldFill = value;
  }

  get shouldFill () {
    return this.#shouldFill;
  }

  translate () {
    // Move the shape on the surface
  }

  rotate () {
    // Rotate the shape  on the surface
  }

  scale () {
    // Scale the shape on the surface
  }
}
