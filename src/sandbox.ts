// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdio.h>
    int main(void)
    {
      int *p;
      if ((p = malloc(sizeof(int)*10000000)) == NULL) {
        exit(1);
      }
      return 0;
    }
  `;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  //   {
  //     let rr = engine.startStepExecution(tree);
  //     let ss = engine.getCurrentState().make();
  //     while(engine.isStepExecutionRunning())
  //     {
  //       rr = engine.stepExecute();
  //       ss = engine.getCurrentState().make();
  //     }
  //   }
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
