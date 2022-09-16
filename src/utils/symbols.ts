// Primitive elements
const STORMER_ELEMENT_POINT = Symbol.for('StormerElement.Point');
const STORMER_ELEMENT_LINE = Symbol.for('StormerElement.Line');
const STORMER_ELEMENT_RECTANGLE = Symbol.for('StormerElement.Rectangle');
const STORMER_ELEMENT_TRIANGLE = Symbol.for('StormerElement.Triangle');
const STORMER_ELEMENT_CIRCLE = Symbol.for('StormerElement.Circle');
const STORMER_ELEMENT_ARC = Symbol.for('StormerElement.Arc');
const STORMER_ELEMENT_ELLIPSE = Symbol.for('StormerElement.Ellipse');
const STORMER_ELEMENT_CURVE = Symbol.for('StormerElement.Curve');
const STORMER_ELEMENT_BEZIER = Symbol.for('StormerElement.Bezier');
const STORMER_ELEMENT_TEXT = Symbol.for('StormerElement.Text');
const STORMER_ELEMENT_IMAGE = Symbol.for('StormerElement.Image');

// Transform actions
const STORMER_TRANSFORM_TRANSLATE = Symbol.for('StormerTransform.Translate');
const STORMER_TRANSFORM_ROTATE = Symbol.for('StormerTransform.Rotate');
const STORMER_TRANSFORM_SCALE = Symbol.for('StormerTransform.Scale');

const STORMER_SYMBOLS = {
  Point: STORMER_ELEMENT_POINT, 
  Line: STORMER_ELEMENT_LINE, 
  Rectangle: STORMER_ELEMENT_RECTANGLE, 
  Triangle: STORMER_ELEMENT_TRIANGLE, 
  Circle: STORMER_ELEMENT_CIRCLE, 
  Arc: STORMER_ELEMENT_ARC, 
  Ellipse: STORMER_ELEMENT_ELLIPSE, 
  Curve: STORMER_ELEMENT_CURVE, 
  Bezier: STORMER_ELEMENT_BEZIER,
  Text: STORMER_ELEMENT_TEXT,
  Image: STORMER_ELEMENT_IMAGE,

  Translate: STORMER_TRANSFORM_TRANSLATE,
  Rotate: STORMER_TRANSFORM_ROTATE,
  Scale: STORMER_TRANSFORM_SCALE,
};

export default STORMER_SYMBOLS;
