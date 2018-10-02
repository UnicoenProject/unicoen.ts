import { UniStatement } from './UniStatement';

export class UniEmptyStatement extends UniStatement {
  public endWith: string;

  public constructor();
  public constructor(endWith: string);
  public constructor(endWith?: string) {
    super();
    if (endWith === undefined) {
      this.endWith = null;
    } else {
      this.endWith = endWith;
    }
    this.fields.set('endWith', String);
  }

  public toString(): string {
    return 'EmptyStatement(' + this.endWith + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniEmptyStatement)) return false;
    const that: UniEmptyStatement = <UniEmptyStatement>obj;
    return super.equals(that)
        && (this.endWith == null ? that.endWith == null : this.endWith === that.endWith);
  }

  public merge(that: UniEmptyStatement) {
    super.merge(that);
    if (that.endWith != null) {
      this.endWith = that.endWith;
    }
  }
}
