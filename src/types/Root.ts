export default interface Root {
  render (): Root;
  unstable_GetUnderlyingContext (): CanvasRenderingContext2D;
}
