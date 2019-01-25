import { UniExpr } from './UniExpr';

export class UniNoneLiteral extends UniExpr {
  public value: string;

  public constructor();
  public constructor(value: string);
  public constructor(value?: string) {
    super();
    if (value === undefined) {
      this.value = null;
    } else {
      this.value = value;
    }
    this.fields.set('value', String);
  }

  public toString(): string {
    return 'NoneLiteral(' + this.value + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniNoneLiteral)) return false;
    const that: UniNoneLiteral = <UniNoneLiteral>obj;
    return (
      super.equals(that) && (this.value == null ? that.value == null : this.value === that.value)
    );
  }

  public merge(that: UniNoneLiteral) {
    super.merge(that);
    if (that.value != null) {
      this.value = that.value;
    }
  }
}
