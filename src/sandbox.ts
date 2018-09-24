// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`#include <stdio.h>
  struct point {
      int x;
  };
  struct rectangle {
    struct point p1;
  };
  int main()
  {
      struct rectangle r;
      r.p1.x = 10;
  }`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  const out = engine.getStdout();
  console.log(r);
  console.log(out);
  engine.getCurrentState().make();
} catch (e) {
  console.error(e);
}
