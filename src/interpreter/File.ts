export default class File
{
  private pos:number = 0;
  private buf:Uint8Array;
  
  constructor(private readonly data:ArrayBuffer
    , private readonly mode:string) {
    this.buf = new Uint8Array(this.data);
  }

  private isBinaryMode():boolean {
    return this.mode.includes("b");
  }

  private isEOF():boolean {
    return this.buf.length <= this.pos;
  }

  public fgetc():number {
    if (this.isEOF()) {
      return -1;
    }
    const ret = this.buf[this.pos++];
    if (!this.isBinaryMode()) {
      if(ret === 0x0d && this.buf[this.pos] === 0x0a) {
        return this.fgetc();
      }
    }
    return ret;
  }

  public fgets(n:number):number[] {
    if (this.isEOF()) {
      return null;
    }
    const bytes:number[] = [];
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
    bytes.push(0);// 終端文字
    return bytes;
  }
}
