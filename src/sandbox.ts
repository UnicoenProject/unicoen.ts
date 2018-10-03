// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`#include <stdio.h>
  int main(void)
  {
      int num;
      printf("整数を入力してください: ");
      scanf("%d", &num);
      if (num < 0) printf("数は負です．");
      if (num > -1) printf("数は正です．");
      return 0;
  }`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
     {
      let rr = engine.startStepExecution(tree);
      let ss = engine.getCurrentState().make();
      while(engine.isStepExecutionRunning())
      {
        rr = engine.stepExecute();
        ss = engine.getCurrentState().make();
      }
    }
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
