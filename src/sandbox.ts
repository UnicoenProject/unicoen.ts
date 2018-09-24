// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`#include <stdio.h>
  struct point {
      int x;
      int y;
  };
  int main()
  {
      struct point p1;
      struct point p2 = {3, 4};
      struct point p3 = {5, 6};
      p1.x = 1;
      p1.y = 0;
      p3 = p1;
      printf("%d %d\n", p1.x, p1.y);
      return p1.x + p1.y + p2.x + p2.y + p3.x + p3.y;
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
