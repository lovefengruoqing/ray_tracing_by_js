export default class Vec3 {
  x = 0;
  y = 0;
  z = 0;

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;

    return this;

  }

  setScalar(scalar) {

    this.x = scalar;
    this.y = scalar;
    this.z = scalar;

    return this;

  }

  setX(x) {

    this.x = x;

    return this;

  }

  setY(y) {

    this.y = y;

    return this;

  }

  setZ(z) {

    this.z = z;

    return this;

  }

  clone() {

    return new this.constructor(this.x, this.y, this.z);

  }

  copy(v) {

    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;

  }

  add(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
      return this.addVectors(v, w);

    }

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;

  }

  addScalar(s) {

    this.x += s;
    this.y += s;
    this.z += s;

    return this;

  }

  addVectors(a, b) {

    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;

    return this;

  }

  addScaledVector(v, s) {

    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;

    return this;

  }

  sub(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
      return this.subVectors(v, w);

    }

    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;

  }

  subScalar(s) {

    this.x -= s;
    this.y -= s;
    this.z -= s;

    return this;

  }

  subVectors(a, b) {

    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;

    return this;

  }

  multiply(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.');
      return this.multiplyVectors(v, w);

    }

    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;

    return this;

  }

  multiplyScalar(scalar) {

    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;

  }

  multiplyVectors(a, b) {

    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;

    return this;

  }

  negate() {

    this.x = - this.x;
    this.y = - this.y;
    this.z = - this.z;

    return this;

  }

  dot(v) {

    return this.x * v.x + this.y * v.y + this.z * v.z;

  }

  lengthSq() {

    return this.x * this.x + this.y * this.y + this.z * this.z;

  }

  length() {

    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

  }

  divide(v) {

    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;

    return this;

  }

  divideScalar(scalar) {

    return this.multiplyScalar(1 / scalar);

  }

  normalize() {

    return this.divideScalar(this.length() || 1);

  }

  cross(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.');
      return this.crossVectors(v, w);

    }

    return this.crossVectors(this, v);

  }

  crossVectors(a, b) {

    var ax = a.x, ay = a.y, az = a.z;
    var bx = b.x, by = b.y, bz = b.z;

    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;

    return this;

  }
}