import { Group } from "./types";

export default class Surface {
  groups: Array<Group>;
  _: CanvasRenderingContext2D;

  constructor (canvas: HTMLCanvasElement) {
    this._ = canvas.getContext('2d');
  }

  renderGroups () {
    // if nothing changed don't re-render
    if (!this.groups.some(group => group.shouldUpdate())) {
      return;
    }

    // save Canvas state
    this._.save();

    // instruct groups to render shapes
    for (let group of this.groups) {
      group.renderShapes();
    }
    
    // restore Canvas state
    this._.restore();
  }
}