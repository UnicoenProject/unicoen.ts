import { UniExpr } from './UniExpr';
import { UniArray } from './UniArray';

export class UniNewArray extends UniExpr {
  public type: string;
  public elementsNum: UniExpr[];
  public value: UniArray;

  public constructor();
  public constructor(type: string, elementsNum: UniExpr[], value: UniArray);
  public constructor(type?: string, elementsNum?: UniExpr[], value?: UniArray) {
    super();
    if (type === undefined && elementsNum === undefined && value === undefined) {
      this.type = null;
      this.elementsNum = [];
      this.value = null;
    } else if (type === undefined || elementsNum === undefined || value === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.type = type;
      this.elementsNum = elementsNum;
      this.value = value;
    }
    this.fields.set('type', String);
    this.fields.set('elementsNum', UniExpr);
    this.fields.set('value', UniArray);
  }

  public toString(): string {
    return 'NewArray(' + this.type + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniNewArray)) return false;
    const that: UniNewArray = <UniNewArray>obj;
    return super.equals(that)
        && (this.type == null ? that.type == null : this.type === that.type)
        && (this.elementsNum == null ? that.elementsNum == null : this.elementsNum.equals(that.elementsNum))
        && (this.value == null ? that.value == null : this.value.equals(that.value));
  }

  public merge(that: UniNewArray) {
    super.merge(that);
    if (that.type != null) {
      this.type = that.type;
    }
    if (that.elementsNum != null) {
      if (this.elementsNum == null) {
        this.elementsNum = that.elementsNum;
      } else {
        this.elementsNum.push(...that.elementsNum);
      }
    }
    if (that.value != null) {
      this.value = that.value;
    }
  }
}
