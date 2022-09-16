export default interface Root {
  render (): Root;
  addEventListener (type: string, listener: (ev: any) => any, options?: any): Root;
  removeEventListener (type: string, listener: (ev: any) => any, options?: any): Root;
  unstable_GetUnderlyingContext (): CanvasRenderingContext2D;
}