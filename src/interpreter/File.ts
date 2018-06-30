export default class File
{
  private pos:number = 0;
  private buf:Uint8Array;
  constructor(private readonly data:ArrayBuffer) {
    this.buf = new Uint8Array(this.data);
  }

  private isEOF():boolean {
    return this.buf.length - 1 <= this.pos;
  }

  public fgetc():number {
    if (this.isEOF()) {
      return -1;
    }
    return this.buf[this.pos++];
  }
  public fgets(n:number):number[] {
    if (this.isEOF()) {
      return null;
    }
    const bytes:number[] = [];
    bytes.fill(0);// 終端文字
    for (let i = 0; i < n - 1; ++i) {
      const c = this.fgetc();
      if (c === -1) {
        break;
      }
      bytes.push(c);
      if (c === '\n'.charCodeAt(0)) {
        break;
      } 
    }
    return bytes;
  }
}
