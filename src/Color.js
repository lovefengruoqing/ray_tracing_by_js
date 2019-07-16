import Vec3 from './Vec3.js';
import hit_record from './hit_record.js';
import Ray from './Ray.js';

function randomInUnitSphere() {
  let p;
  do {
    p = new Vec3(Math.random(), Math.random(), Math.random()).subScalar(1).multiplyScalar(2);
  } while (p.lengthSq() >= 1);
  return p;
}

const Color = (ray, box) => {
  let rec = hit_record();
  if (box.hit(ray, 0, Number.MAX_VALUE, rec)) {
    let target = rec.p.clone().addVectors(rec.normal, randomInUnitSphere());
    // let v = unitVector.addScalar(1).multiplyScalar(0.5);
    return Color(new Ray(rec.p, target.sub(rec.p)), box).multiplyScalar(0.5);
  } else {
    let unit = ray.getDirection().normalize();

    let t = 0.5 * (unit.y + 1);
    let v = new Vec3(1, 1, 1).multiplyScalar(1 - t).add(new Vec3(0.5, 0.7, 1).multiplyScalar(t));
    return v;
  }

}

export default Color;