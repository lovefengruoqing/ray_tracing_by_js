import Vec3 from './Vec3.js';
import Ray from './Ray.js';


export default class Camera {
  lowLeftCorner = new Vec3(-2, -1, -1);
  vertical = new Vec3(0, 2, 0);
  horizontal = new Vec3(4, 0, 0);
  origin = new Vec3(0, 0, 0);
  
  getRay(u, v){
    const origin = this.origin;
    const lowLeftCorner = this.lowLeftCorner;
    const horizontal = this.horizontal;
    const vertical = this.vertical;
    return new Ray(origin, lowLeftCorner.clone().add(
      horizontal.clone().multiplyScalar(u)).add(vertical.clone().multiplyScalar(v)));
  }
}