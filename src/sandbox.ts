// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`#include <stdio.h>
  int a = 3;
  struct point {
      int x;
      int y;
  };
  void add(struct point* pos)
  {
      (*pos).x = (*pos).x + 1;
      (*pos).y = (*pos).y + 2;
  }
  int main()
  {
      struct point r = { 0, 0 };
      struct point* pos = &r;
      //add(&r);
      //return r.y;
  }`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
//   {
//     let rr = engine.startStepExecution(tree);
//     let ss = engine.getCurrentState().make();
//     while(engine.isStepExecutionRunning())
//     {
//       rr = engine.stepExecute();
//       ss = engine.getCurrentState().make();
//     }
//   }
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
