export class Int extends Number {
  constructor(v: number) {
    // tslint:disable-next-line:no-bitwise
    super(v | 0);
  }
  valueOf() {
    return super.valueOf();
  }
}
