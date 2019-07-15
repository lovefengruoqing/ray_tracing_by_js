import Vec3 from './Vec3.js';

export default () => ({
  t: 0,
  p: new Vec3(),
  normal: new Vec3(),
  clone(target) {
    Object.keys(this).forEach((key) => {
      if (key !== 'clone') {
        this[key] = target[key];
      }
    })
  }
})