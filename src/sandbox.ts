// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  int main() {
    int sqr[2][3][4]= {
      {
        {1,2},
        5,6,7,8,
        {9,10,11,12},
      },
      {
        {13,14,15,16},
        {17,18,19,20},
        {21,22,23,24},
      },
    };
    for (int i = 0; i < 2; ++i) {
      for (int k = 0; k < 3; ++k) {
        for (int m = 0; m < 4; ++m) {
          printf("%d,", sqr[i][k][m]);
        }
        printf("\n");
      }
      printf("\n");
    }
    int* start = &sqr[0][0][0];
    for (int i = 0; i < 24; ++i) {
      printf("%d,", start[i]);
    }
    return 0;
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
} catch (e) {
  console.error(e);
}
