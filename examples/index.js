import Stormer from './dist/index';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('bitmaprenderer')
function draw () {
  let root = Stormer.createRoot('canvas');
  let layer0 = Stormer.createLayer();
  let layer1 = Stormer.createLayer();
  let layer2 = Stormer.createLayer();
  let layer3 = Stormer.createLayer();

  let rect0 = Stormer.createRectangle(
    0, 60,
    100, 100
    ).attachTo(layer1);

  rect0.props
  .fillStyle('violet')
  .shouldFill(true);

  let rect1 = Stormer.createRectangle(
    120, 60,
    100, 100
    ).attachTo(layer2);

  rect1.props
  .fillStyle('orange')
  .shouldFill(true);
 root.render();

 let margin = 40;
 let delta = 70;

 // draw offscreen
 let rect2 = Stormer.createRectangle(
   -(delta),
   -(delta), 
   140, 140).attachTo(layer0);
 // some props
 rect2.props
   .lineWidth(6)
   .strokeStyle('red');

 // translate the origin
 rect2.transforms
   .translate(delta + margin, delta + margin)
   .scale(.5, .5);

 // draw offscreen
 let rect3 = Stormer.createRectangle(
   -(delta),
   -(delta), 
   140, 140).attachTo(layer3);
 // some props
 rect3.props
   .lineWidth(6)
   .strokeStyle('green');

 // translate the origin
 rect3.transforms
   .translate(delta + margin, delta + margin);

 // root.render();

 function animate (raf) {
   let handle = requestAnimationFrame(animate);
   rect2.transforms
   .rotate(2);

   rect3.transforms
   .rotate(-2);
   root.render();
 }
requestAnimationFrame(animate);
}

draw();