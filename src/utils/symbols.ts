// Primitive elements
const STORM_POINT = Symbol.for('Elements.Point');
const STORM_LINE = Symbol.for('Elements.Line');
const STORM_RECTANGLE = Symbol.for('Elements.Rectangle');
const STORM_TRIANGLE = Symbol.for('Elements.Triangle');
const STORM_CIRCLE = Symbol.for('Elements.Circle');
const STORM_ARC = Symbol.for('Elements.Arc');
const STORM_ELLIPSE = Symbol.for('Elements.Ellipse');
const STORM_CURVE = Symbol.for('Elements.Curve');
const STORM_BEZIER = Symbol.for('Elements.Bezier');
const STORM_TEXT = Symbol.for('Elements.Text');
const STORM_IMAGE = Symbol.for('Elements.Image');

// Transform actions
const STORM_TRANSLATE = Symbol.for('Transforms.Translate');
const STORM_ROTATE = Symbol.for('Transforms.Rotate');
const STORM_SCALE = Symbol.for('Transforms.Scale');

const StormTypes = {
  Point: STORM_POINT, 
  Line: STORM_LINE, 
  Rectangle: STORM_RECTANGLE, 
  Triangle: STORM_TRIANGLE, 
  Circle: STORM_CIRCLE, 
  Arc: STORM_ARC, 
  Ellipse: STORM_ELLIPSE, 
  Curve: STORM_CURVE, 
  Bezier: STORM_BEZIER,
  Text: STORM_TEXT,
  Image: STORM_IMAGE,

  Translate: STORM_TRANSLATE,
  Rotate: STORM_ROTATE,
  Scale: STORM_SCALE,
};

export default StormTypes;
