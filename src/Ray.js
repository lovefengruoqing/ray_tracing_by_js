export default class Ray {
  constructor(a, b) {
    this.A = a;
    this.B = b;
  }

  getOrigin() {
    return this.A;
  }

  getDirection() {
    return this.B;
  }

  getPointAtParameter(t) {
    return this.A + this.B * t;
  }
}