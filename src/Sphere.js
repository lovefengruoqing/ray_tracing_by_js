import Hitable from './Hitable.js';
import Vec3 from "./Vec3.js";

export default class Sphere extends Hitable {
  center;
  radius;

  constructor(center = new Vec3(), radius) {
    super();
    this.center = center;
    this.radius = radius;
  }

  hit(ray, t_min, t_max, rec) {
    super.hit();
    let center = this.center;
    let radius = this.radius;

    const oc = ray.getOrigin().clone().sub(center);
    const a = ray.getDirection().dot(ray.getDirection());
    const b = ray.getDirection().dot(oc);
    const c = oc.dot(oc) - radius * radius;
    const descriminant = b * b - a * c;

    if (descriminant > 0) {
      let temp = (-b - Math.sqrt(descriminant)) / a;
      if (temp > t_min && temp < t_max) {
        rec.t = temp;
        rec.p = ray.getPointAtParameter(temp);
        rec.normal = rec.p.clone().sub(center).divideScalar(radius);

        return true;
      }
      temp = (-b + Math.sqrt(descriminant)) / a;
      if (temp > t_min && temp < t_max) {
        rec.t = temp;
        rec.p = ray.getPointAtParameter(temp);
        rec.normal = rec.p.clone().sub(center).divideScalar(radius);

        return true;
      }
    }
    return false;
  }
}