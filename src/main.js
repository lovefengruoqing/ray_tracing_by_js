import { resetSize } from './util.js';
import Vec3 from "./Vec3.js";
import Ray from "./Ray.js";
import Color from './Color.js';
import Sphere from "./Sphere.js";
import Box from "./Box.js";
import Camera from './Camera.js';

const canvas = document.querySelector('#root');
const ctx = canvas.getContext('2d');

resetSize(canvas);

const w = 200;
const h = 100;
const ns = 20;
const arr = new Uint8ClampedArray(4 * w * h);

const camera = new Camera();

let list = [
  new Sphere(new Vec3(0, 0, -1), 0.5),
  // new Sphere(new Vec3(-1, 0, -1), 0.2),
  new Sphere(new Vec3(0, -100.5, -1), 100),
];
let box = new Box(list, list.length);

// Iterate through every pixel
for (let j = 0; j < h; j++) {
  for (let i = 0; i < w; i++) {
    let color = new Vec3(0, 0, 0);
    for (let k = 0; k < ns; k++) {
      let u = (i + Math.random()) / w;
      let v = 1 - (j + Math.random()) / h;

      const r = camera.getRay(u, v);

      color.add(new Color(r, box));
    }
    color.divideScalar(ns);

    let pos = (j * w + i) * 4;

    arr[pos] = Math.floor(266 * color.x);    // R value
    arr[pos + 1] = Math.floor(266 * color.y);  // G value
    arr[pos + 2] = Math.floor(266 * color.z);    // B value
    arr[pos + 3] = 255;  // A value
  }
}

// Initialize a new ImageData object
let imageData = new ImageData(arr, w, h);

ctx.putImageData(imageData, 0, 0);





