export default function layerKey (idx: number): symbol {
  return Symbol.for(`Stormer.Layer-${idx}`);
}
