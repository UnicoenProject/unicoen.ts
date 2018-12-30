import { CPP14Interpreter } from './interpreter/CPP14/CPP14Interpreter';
// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include<stdio.h>
  int recursiveToThree(int n){
    printf("%d th\n", n + 1);
    if(n < 3){
      int r = recursiveToThree(n + 1);
      n = r;
    }
    return n;
  }
  int main(){
    int n = 0;//変数定義

    n = recursiveToThree(0);//再帰関数呼出

    int arr[5] = {1, 2, 3};//配列変数

    int* ptr = &arr[2];//ポインタ変数
    *ptr = 5;

    //動的メモリ確保
    int* d_arry = malloc(sizeof(int) * 3);

    //二次元ポインタ配列の動的メモリ配列
    int* pd_arr[2];
    pd_arr[0] = malloc(sizeof(int) * 2);
    pd_arr[1] = malloc(sizeof(int) * 2);

    printf("Hello,world!\n");//標準出力

    //メモリの解放
    free(pd_arr[0]);
    return 0;
  }
`;
  const interpreter = new CPP14Interpreter();
  const syntaxError = interpreter.checkSyntaxError(text);
  interpreter.stdin('10\n+\n15\n-\n5\n=\n20');
  const map = new Map<string, ArrayBuffer>();
  interpreter.setFileList(map);
  //  {
  //   let rr = engine.startStepExecution(tree);
  //   let ss = engine.getCurrentState().make();
  //   while(engine.isStepExecution5Running())
  //   {
  //     rr = engine.stepExecute();
  //     ss = engine.getCurrentState().make();
  //   }
  // }
  const r = interpreter.execute(text);
  const out = interpreter.getStdout();
  const state = interpreter.getCurrentState();
  console.log(r);
  console.log(out);
} catch (e) {
  console.error(e);
}
