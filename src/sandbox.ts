// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  struct point {
    　int x;
    　int y;
　} p1, p2;
  int main()
  {
    p1.x = 1;
    p1.y = 2;
    return p1.x + p1.y;
  }
`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('15');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  //  {
  //   let rr = engine.startStepExecution(tree);
  //   let ss = engine.getCurrentState().make();
  //   while(engine.isStepExecution5Running())
  //   {
  //     rr = engine.stepExecute();
  //     ss = engine.getCurrentState().make();
  //   }
  // }
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
