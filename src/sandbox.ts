// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

for(let i=0; i<=255; ++i){
  const t = String.fromCharCode(i);
  console.log(`${i}=${t}`);
  console.log(`${t}=${t.charCodeAt(0)}`);
}

try {
  const text = String.raw`
  int main(void)
  {

    int n, m;
    n = '\a';
    m = '\t';
    printf("a:\t%d\n", '\a');
    printf("t:\t%d\n", '\t');
    printf("n:\t%d\n", '\n');
    printf("\101,\x42,C");
    return 0;
  }`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('123');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
    //  {
    //   let rr = engine.startStepExecution(tree);
    //   let ss = engine.getCurrentState().make();
    //   while(engine.isStepExecutionRunning())
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
