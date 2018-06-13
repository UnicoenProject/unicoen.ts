import UniExpr from './UniExpr';

export default class UniCast extends UniExpr {
  public type: string;
  public value: UniExpr;

  public constructor();
  public constructor(type: string, value: UniExpr);
  public constructor(type?: string, value?: UniExpr) {
    super();
    if (type === undefined && value === undefined) {
      this.type = '';
      this.value = new UniExpr();
    } else if (type === undefined || value === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.type = type;
      this.value = value;
    }
    this.fields.set('type', String);
    this.fields.set('value');
  }

  public toString(): string {
    return 'Cast(' + this.type + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniCast)) return false;
    const that: UniCast = <UniCast>obj;
    return super.equals(that)
        && (this.type == null ? that.type == null : this.type === that.type)
        && (this.value == null ? that.value == null : this.value.equals(that.value));
  }

  public merge(that: UniCast) {
    super.merge(that);
    if (that.type != null) {
      this.type = that.type;
    }
    if (that.value != null) {
      this.value = that.value;
    }
  }
}
