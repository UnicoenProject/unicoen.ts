import { UniStatement } from './UniStatement';

export class UniContinue extends UniStatement {
  public toString(): string {
    return 'Continue(' + ')';
  }

  public equals(obj: any): boolean {
    if (obj == null || !(obj instanceof UniContinue)) return false;
    const that: UniContinue = <UniContinue>obj;
    return super.equals(that);
  }

}
