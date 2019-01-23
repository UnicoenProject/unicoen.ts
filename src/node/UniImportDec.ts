import { UniDecralation } from './UniDecralation';

export class UniImportDec extends UniDecralation {
  public name: string;
  public ondemand: string;

  public constructor();
  public constructor(name: string, ondemand: string);
  public constructor(name?: string, ondemand?: string) {
    super();
    if (name === undefined && ondemand === undefined) {
      this.name = null;
      this.ondemand = null;
    } else if (name === undefined || ondemand === undefined) {
      throw new Error('invalid arguments');
    } else {
      this.name = name;
      this.ondemand = ondemand;
    }
    this.fields.set('name', String);
    this.fields.set('ondemand', String);
  }

  public toString(): string {
    return 'ImportDec(' + this.name + ', ' + this.ondemand + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniImportDec)) return false;
    const that: UniImportDec = <UniImportDec>obj;
    return (
      super.equals(that) &&
      (this.name == null ? that.name == null : this.name === that.name) &&
      (this.ondemand == null ? that.ondemand == null : this.ondemand === that.ondemand)
    );
  }

  public merge(that: UniImportDec) {
    super.merge(that);
    if (that.name != null) {
      this.name = that.name;
    }
    if (that.ondemand != null) {
      this.ondemand = that.ondemand;
    }
  }
}
