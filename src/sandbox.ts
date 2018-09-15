import { Java8Engine, Java8Mapper } from '.';

try {
  const text = String.raw`public class Aisatsu {
    public static void main(String[] args) {
      System.out.println("加算の結果は" + (3 + 2) + "です。");
    }
  }`;

  const cmapper = new Java8Mapper();
  const tree = cmapper.parse(text);
  const engine = new Java8Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  const out = engine.getStdout();
  console.log(r);
  console.log(out);
} catch (e) {
  console.error(e);
}
