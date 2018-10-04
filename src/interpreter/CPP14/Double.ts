export class Double extends Number {
  constructor(v: number) {
    // tslint:disable-next-line:no-bitwise
    super(v);
  }
  valueOf() {
    return super.valueOf();
  }
}
