export default function layerKey (idx: number): symbol {
  return Symbol.for(`Storm.Layer-${idx}`);
}
