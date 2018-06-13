import UniSwitch from './UniSwitch';
import UniExpr from './UniExpr';
import UniStatement from './UniStatement';

export default class UniSwitchUnit extends UniSwitch {
  public label: string;
  public cond: UniExpr;
  public statement: UniStatement[];

  public constructor();
  public constructor(label: string, cond: UniExpr, statement: UniStatement[]);
  public constructor(label?: string, cond?: UniExpr, statement?: UniStatement[]) {
    super();
    if (label === undefined && cond === undefined && statement === undefined) {
      this.label = '';
      this.cond = new UniExpr();
      this.statement = [];
    } else if (label === undefined || cond === undefined || statement === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.label = label;
      this.cond = cond;
      this.statement = statement;
    }
    this.fields.set('label', String);
    this.fields.set('cond');
    this.fields.set('statement');
  }

  public toString(): string {
    return 'SwitchUnit(' + this.label + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniSwitchUnit)) return false;
    const that: UniSwitchUnit = <UniSwitchUnit>obj;
    return super.equals(that)
        && (this.label == null ? that.label == null : this.label === that.label)
        && (this.cond == null ? that.cond == null : this.cond.equals(that.cond))
        && (this.statement == null ? that.statement == null : this.statement.equals(that.statement));
  }

  public merge(that: UniSwitchUnit) {
    super.merge(that);
    if (that.label != null) {
      this.label = that.label;
    }
    if (that.cond != null) {
      this.cond = that.cond;
    }
    if (that.statement != null) {
      if (this.statement == null) {
        this.statement = that.statement;
      } else {
        this.statement.push(...that.statement);
      }
    }
  }
}
