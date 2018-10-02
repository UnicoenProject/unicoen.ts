import { UniExpr } from './UniExpr';

export class UniNew extends UniExpr {
  public type: string;
  public args: UniExpr[];

  public constructor();
  public constructor(type: string, args: UniExpr[]);
  public constructor(type?: string, args?: UniExpr[]) {
    super();
    if (type === undefined && args === undefined) {
      this.type = null;
      this.args = [];
    } else if (type === undefined || args === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.type = type;
      this.args = args;
    }
    this.fields.set('type', String);
    this.fields.set('args', UniExpr);
  }

  public toString(): string {
    return 'New(' + this.type + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniNew)) return false;
    const that: UniNew = <UniNew>obj;
    return super.equals(that)
        && (this.type == null ? that.type == null : this.type === that.type)
        && (this.args == null ? that.args == null : this.args.equals(that.args));
  }

  public merge(that: UniNew) {
    super.merge(that);
    if (that.type != null) {
      this.type = that.type;
    }
    if (that.args != null) {
      if (this.args == null) {
        this.args = that.args;
      } else {
        this.args.push(...that.args);
      }
    }
  }
}
