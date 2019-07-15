import Vec3 from './Vec3.js';


function hit_shpere(center, radius, ray) {
  const oc = ray.getOrigin().clone().sub(center);
  const a = ray.getDirection().dot(ray.getDirection());
  const b = 2 * ray.getDirection().dot(oc);
  const c = oc.dot(oc) - radius * radius;
  const descriminant = b * b - 4 * a * c;
  // return descriminant > 0;
  if (descriminant < 0) {
    return -1;
  } else {
    return (-b - Math.sqrt(descriminant)) / (2 * a);
  }
}

export default class Color extends Vec3 {
  constructor(ray) {
    super();

    let t = hit_shpere(new Vec3(0, 0, -1), 0.5, ray)
    if (t > 0) {
      let unitVector = ray.getPointAtParameter(t).sub(new Vec3(0, 0, -1)).normalize();
      let v = unitVector.addScalar(1).multiplyScalar(0.5);
      this.set(v.x, v.y, v.z);
    } else {
      let unit = ray.getDirection().normalize();

      t = 0.5 * (unit.y + 1);
      let v = new Vec3(1, 1, 1).multiplyScalar(1 - t).add(new Vec3(0.5, 0.7, 1).multiplyScalar(t));
      this.set(v.x, v.y, v.z);
    }

  }
}