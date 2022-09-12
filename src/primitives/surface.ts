import Group from "./group";

export default class Surface {
  groups: Array<Group>;
  _surface: CanvasRenderingContext2D;

  constructor (canvas: HTMLCanvasElement) {
    this._surface = canvas.getContext('2d');
  }

  renderGroups () {
    // if nothing changed don't re-render
    if (!this.groups.some(group => group.shouldUpdate())) {
      return;
    }

    // save Canvas state
    this._surface.save();

    // instruct groups to render shapes
    for (let group of this.groups) {
      group.renderShapes();
    }
    
    // restore Canvas state
    this._surface.restore();
  }
}