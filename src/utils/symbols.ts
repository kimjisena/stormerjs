// Primitive shapes
const STORM_POINT = Symbol.for('Shapes.Point');
const STORM_LINE = Symbol.for('Shapes.Line');
const STORM_RECTANGLE = Symbol.for('Shapes.Rectangle');
const STORM_TRIANGLE = Symbol.for('Shapes.Triangle');
const STORM_CIRCLE = Symbol.for('Shapes.Circle');
const STORM_ARC = Symbol.for('Shapes.Arc');
const STORM_ELLIPSE = Symbol.for('Shapes.Ellipse');
const STORM_CURVE = Symbol.for('Shapes.Curve');
const STORM_BEZIER = Symbol.for('Shapes.Bezier');

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

  Translate: STORM_TRANSLATE,
  Rotate: STORM_ROTATE,
  Scale: STORM_SCALE,
};

export default StormTypes;
