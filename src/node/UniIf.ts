import UniStatement from './UniStatement';
import UniExpr from './UniExpr';

export default class UniIf extends UniStatement {
  public cond: UniExpr;
  public trueStatement: UniStatement;
  public falseStatement: UniStatement;

  public constructor();
  public constructor(cond: UniExpr, trueStatement: UniStatement, falseStatement: UniStatement);
  public constructor(cond?: UniExpr, trueStatement?: UniStatement, falseStatement?: UniStatement) {
    super();
    if (cond === undefined && trueStatement === undefined && falseStatement === undefined) {
      this.cond = new UniExpr();
      this.trueStatement = new UniStatement();
      this.falseStatement = new UniStatement();
    } else if (cond === undefined || trueStatement === undefined || falseStatement === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.cond = cond;
      this.trueStatement = trueStatement;
      this.falseStatement = falseStatement;
    }
    this.fields.set('cond');
    this.fields.set('trueStatement');
    this.fields.set('falseStatement');
  }

  public toString(): string {
    return 'If(' + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniIf)) return false;
    const that: UniIf = <UniIf>obj;
    return super.equals(that)
        && (this.cond == null ? that.cond == null : this.cond.equals(that.cond))
        && (this.trueStatement == null ? that.trueStatement == null : this.trueStatement.equals(that.trueStatement))
        && (this.falseStatement == null ? that.falseStatement == null : this.falseStatement.equals(that.falseStatement));
  }

  public merge(that: UniIf) {
    super.merge(that);
    if (that.cond != null) {
      this.cond = that.cond;
    }
    if (that.trueStatement != null) {
      this.trueStatement = that.trueStatement;
    }
    if (that.falseStatement != null) {
      this.falseStatement = that.falseStatement;
    }
  }
}
