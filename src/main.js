import { resetSize } from './util.js';

const canvas = document.querySelector('#root');
const ctx = canvas.getContext('2d');

resetSize(canvas);

const w = 200;
const h = 100;
const arr = new Uint8ClampedArray(4 * w * h);

// Iterate through every pixel
for (let j = 0; j < h; j++) {
  for (let i = 0; i < w; i ++) {
    let r = i/w;
    let g = 1 - j/h;
    let b = 0.2;
    
    let pos = (j * w + i) * 4;
    
    arr[pos] = Math.floor(266*r);    // R value
    arr[pos + 1] = Math.floor(266*g);  // G value
    arr[pos + 2] = Math.floor(266*b);    // B value
    arr[pos + 3] = 255;  // A value
  }
}

// Initialize a new ImageData object
let imageData = new ImageData(arr, w, h);

ctx.putImageData(imageData, 0, 0);





