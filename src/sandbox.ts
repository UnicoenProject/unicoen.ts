// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`#include <stdio.h>
  struct point {
      int x;
      int y;
  };
  struct rectangle {
    struct point p1;
    struct point p2;
  };
  int main()
  {
      struct rectangle r;
      struct rectangle r2;
      r.p1.x = 10;
      r.p1.y = 10;
      r.p2.x = 10;
      r.p2.y = 10;
      return r.p1.x + r.p1.y + r.p2.x + r.p2.y;
  }`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
