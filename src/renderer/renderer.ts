import Shape from "../primitives/Shape";

class StormRenderer {
  surface: CanvasRenderingContext2D;

  constructor (canvas: HTMLCanvasElement) {
    this.surface = canvas.getContext('2d');
  }

  render (shape: Shape | Array<Shape>): void {
    // Render a component or a collection of components
    if (!Array.isArray(shape)) {
      shape.render();
    } else {
      shape.forEach(s => s.render());
    }
  }
  
}

export { StormRenderer }