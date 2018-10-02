// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdio.h>
  int main() {
    int a=3;
    switch (a) {
    	case 1:
    		printf("a = 1\n");
    		break;
    	case 3:
    		printf("a = 3\n");
    		break;
    	case 5:
    		printf("a = 5\n");
    		break;
    	default:
    		printf("others\n");
    		break;
    }
  }
  `;

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
