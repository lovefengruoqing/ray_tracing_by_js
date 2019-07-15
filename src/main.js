import { resetSize } from './util.js';
import Vec3 from "./Vec3.js";
import Ray from "./Ray.js";
import Color from './Color.js';

const canvas = document.querySelector('#root');
const ctx = canvas.getContext('2d');

resetSize(canvas);

const w = 200;
const h = 100;
const arr = new Uint8ClampedArray(4 * w * h);

const lowLeftCorner = new Vec3(-2, -1, -1);
const vertical = new Vec3(0, 2, 0);
const horizontal = new Vec3(4, 0, 0);
const origin = new Vec3(0, 0, 0);

// Iterate through every pixel
for (let j = 0; j < h; j++) {
  for (let i = 0; i < w; i++) {
    let u = i / w;
    let v = 1 - j / h;

    const r = new Ray(origin, lowLeftCorner.clone().add(
      horizontal.clone().multiplyScalar(u)).add(vertical.clone().multiplyScalar(v)));
      
    let color = new Color(r);

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





