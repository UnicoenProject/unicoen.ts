/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
export class CodeLocation {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  equals(obj: any): boolean {
    if (obj == null || !(obj instanceof CodeLocation)) {
      return false;
    }
    const that: CodeLocation = obj as CodeLocation;
    return this.x === that.x && this.y === that.y;
  }
}
