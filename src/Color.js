import Vec3 from './Vec3.js';


export default class Color extends Vec3 {
  constructor(ray) {
    super();
    let rayDirection = ray.getDirection();
    let unit = rayDirection.normalize();

    let t = 0.5 * (unit.y + 1);
    let v = new Vec3(1, 1, 1).multiplyScalar(1 - t).add(new Vec3(0.5, 0.7, 1).multiplyScalar(t));
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
  }
}