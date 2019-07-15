import Hitable from './Hitable.js';
import hit_record from './hit_record.js';
import Vec3 from "./Vec3.js";

export default class Box extends Hitable {
  list;
  listSize;

  constructor(list, n) {
    super();
    this.list = list;
    this.listSize = n;
  }

  hit(ray, t_min, t_max, rec) {
    super.hit();

    let temp_rec = hit_record();
    let hit_anything = false;
    let closest_so_far = t_max;
    for (let i = 0; i < this.listSize; i++) {
      const target = this.list[i];
      if (target.hit(ray, t_min, closest_so_far, temp_rec)) {
        hit_anything = true;
        closest_so_far = temp_rec.t;
        rec.clone(temp_rec);
      }
    }
    return hit_anything;
  }
}