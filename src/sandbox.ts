// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  int main() {
    int sqr[3][3] = {
    1, 2, 3,
    {4, 5},
    {7}
    };
    for (int i = 0; i < 3; ++i) {
      for (int k = 0; k < 3; ++k) {
        printf("%d,", sqr[i][k]);
      }
    }
    int* start = &sqr[0][0];
    for (int i = 0; i < 9; ++i) {
      printf("%d,", start[i]);
    }
    return start[5];
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
