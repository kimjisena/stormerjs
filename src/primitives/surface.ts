export default class Surface {
  _: CanvasRenderingContext2D;

  constructor (canvas: HTMLCanvasElement) {
    this._ = canvas.getContext('2d');
  }

  clear (): void {
    this._.clearRect(0, 0, this._.canvas.width, this._.canvas.height);
  }
  
}
