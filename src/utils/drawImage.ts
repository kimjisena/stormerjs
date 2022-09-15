
export default function drawImage (element: any, ctx: CanvasRenderingContext2D): void {
  if (element.dpos && element.spos) {
    ctx.drawImage(
      element.image,
      element.spos.x,
      element.spos.y,
      element.sw,
      element.sh,
      element.dpos.x,
      element.dpos.y,
      element.dw,
      element.dh
    );
  } else if (element.dpos && element.dw && element.dh) {
    ctx.drawImage(
      element.image, 
      element.dpos.x, 
      element.dpos.y, 
      element.dw, 
      element.dh
    );
  } else {
    ctx.drawImage(
      element.image, 
      element.dpos.x, 
      element.dpos.y
    );
  }
}