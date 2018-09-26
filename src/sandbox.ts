// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  struct point { 
      int x; 
      int y;
  };
  void add_point(struct point *pp)
  {
    pp->x = pp->x + 1;
    pp->y = pp->y + 1;
  };
  int main(void)
  {
    struct point p = {0,0};
    add_point(&p);
    printf("%d\n", p.x);
    return 0;
  }
  `;

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
