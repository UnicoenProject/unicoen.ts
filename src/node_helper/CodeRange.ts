import { CodeLocation } from './CodeLocation';

export class CodeRange {
  begin: CodeLocation;
  end: CodeLocation;
  constructor(begin: CodeLocation, end: CodeLocation) {
    this.begin = new CodeLocation(begin.x, begin.y);
    this.end = new CodeLocation(end.x, end.y);
  }
  equals(obj: any): boolean {
    if (obj == null || !(obj instanceof CodeRange)) {
      return false;
    }
    const that: CodeRange = obj as CodeRange;
    return this.begin.equals(that.begin) && this.end.equals(that.end);
  }
}
