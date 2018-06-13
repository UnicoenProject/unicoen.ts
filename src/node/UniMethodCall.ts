import UniExpr from './UniExpr';

export default class UniMethodCall extends UniExpr {
  public receiver: UniExpr;
  public methodName: string;
  public args: UniExpr[];

  public constructor();
  public constructor(receiver: UniExpr, methodName: string, args: UniExpr[]);
  public constructor(receiver?: UniExpr, methodName?: string, args?: UniExpr[]) {
    super();
    if (receiver === undefined && methodName === undefined && args === undefined) {
      this.receiver = new UniExpr();
      this.methodName = '';
      this.args = [];
    } else if (receiver === undefined || methodName === undefined || args === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.receiver = receiver;
      this.methodName = methodName;
      this.args = args;
    }
    this.fields.set('receiver');
    this.fields.set('methodName', String);
    this.fields.set('args');
  }

  public toString(): string {
    return 'MethodCall(' + this.methodName + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniMethodCall)) return false;
    const that: UniMethodCall = <UniMethodCall>obj;
    return super.equals(that)
        && (this.receiver == null ? that.receiver == null : this.receiver.equals(that.receiver))
        && (this.methodName == null ? that.methodName == null : this.methodName === that.methodName)
        && (this.args == null ? that.args == null : this.args.equals(that.args));
  }

  public merge(that: UniMethodCall) {
    super.merge(that);
    if (that.receiver != null) {
      this.receiver = that.receiver;
    }
    if (that.methodName != null) {
      this.methodName = that.methodName;
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
