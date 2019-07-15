import Vec3 from './Vec3.js';
import hit_record from './hit_record.js';


export default class Color extends Vec3 {
  constructor(ray, box) {
    super();

    let rec = hit_record();
    if (box.hit(ray, 0, Number.MAX_VALUE, rec)) {
      let unitVector = rec.normal;
      let v = unitVector.addScalar(1).multiplyScalar(0.5);
      this.set(v.x, v.y, v.z);
    } else {
      let unit = ray.getDirection().normalize();

      let t = 0.5 * (unit.y + 1);
      let v = new Vec3(1, 1, 1).multiplyScalar(1 - t).add(new Vec3(0.5, 0.7, 1).multiplyScalar(t));
      this.set(v.x, v.y, v.z);
    }

  }
}