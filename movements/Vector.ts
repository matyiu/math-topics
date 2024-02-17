class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public sub(v: Vector): Vector {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  get qLengh(): number {
    return this.x + this.y;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public gt(v: Vector): boolean {
    return (v.qLengh) > (this.qLengh);
  }

  public lt(v: Vector): boolean {
    return (v.qLengh) < (this.qLengh);
  }

  public eq(v: Vector): boolean {
    return (v.qLengh) === (this.qLengh);
  }

  public normalize(): Vector {
    const length = this.length;

    return new Vector(this.x / length, this.y / length);
  }
}

const P = new Vector(1, 1);
const I = new Vector(5, 3);
const C = new Vector(6, 4);

const vIP = I.sub(P);
const vIC = I.sub(C);

console.log('Point P: ' + P);
console.log('Point I: ' + I);
console.log('Vector from P to I: ' + vIP);
console.log('Length vector PI: ', vIP.length);
console.log('Is IP greater than IC?', vIC.gt(vIP));
console.log('Is IC equals to IC?', vIC.eq(vIC));
console.log('Unit length vector IC: ' + vIC.normalize())
console.log('Unit length vector IC (length)', vIC.normalize().length)
