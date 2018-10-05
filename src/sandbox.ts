// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  int main() {
    int inum;
    char ptr[5];
  
    inum = atoi("123");
    printf("inum=%d\n", inum);/* 123 */
  
    inum = atoi("abc");
    printf("inum=%d\n", inum);/* 0 */
  
    inum = atoi("1a2b3c");
    printf("inum=%d\n", inum);/* 1 */
  
    inum = atoi("a7b8c9");
    printf("inum=%d\n", inum);/* 0 */
  
    inum = atoi("");
    printf("inum=%d\n", inum);/* 0 */
  
    ptr[0] = '\0';
    inum = atoi(&ptr[0]);
    printf("inum=%d\n", inum);/* 0 */
  
    ptr[0] = '1'; ptr[1] = '2'; ptr[2] = '3'; ptr[3] = '\0';
    inum = atoi(ptr);
    printf("inum=%d\n", inum);/* 123 */
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
