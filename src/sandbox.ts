// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`

  int main(void)
  {
  
    char test1[10] = "abcdef";
    char test2[20] = "あいうえお";
  
    int len1,len2;
  
    //test1の文字列の長さを取得
    len1 = strlen(test1);
  
    //test2の文字列の長さを取得
    len2 = strlen(test2);
    
    
    //表示
    printf("test1の文字列の長さは→%d\n",len1);
    printf("test2の文字列の長さは→%d\n",len2);
  
  
    return 0;
  }
`;

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
