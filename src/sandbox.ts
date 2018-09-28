// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  int* getAddr(int a){
    return &a;
  }
  int main()
  {
    int b = 2;
    int* p = getAddr(b);
    return *p;
  }`;

  const cmapper = new CPP14Mapper();
  cmapper.parse('int add();');
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
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
  //   {
  //     let rr = engine.startStepExecution(tree);
  //     let ss = engine.getCurrentState().make();
  //     while(engine.isStepExecutionRunning())
  //     {
  //       rr = engine.stepExecute();
  //       ss = engine.getCurrentState().make();
  //     }
  //   }