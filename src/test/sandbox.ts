import { CPP14Interpreter } from '../interpreter/CPP14/CPP14Interpreter';
import { Java8Interpreter } from '../interpreter/Java8/Java8Interpreter';

// tslint:disable
// const t = String.raw`
// int main() {
//     int arr[] = {0,0,0,0,0};
//     arr[2] = 9;
//     //return arr[2];
// }`;
// const i = new CPP14Interpreter();
// const ret = i.execute(t);
// console.log(ret);

try {
  const text = String.raw`
  import java.util.*;

  public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      while (true) {
        int n = sc.nextInt();
        int r = sc.nextInt();
        if (n == 0) {
          break;
        }
        int[] a = new int[n];
        int[] b = new int[n];
        for (int i = 0; i < n; i++) {
          a[i] = n - i;
        }
        for (int i = 0; i < r; i++) {
          int p = sc.nextInt();
          int c = sc.nextInt();
          p--;
          for (int j = 0; j < c; j++) {
            b[j] = a[p + j];
          }
          for (int j = 0; j < p; j++) {
            b[c + j] = a[j];
          }
          for (int j = 0; j < p + c; j++) {
            a[j] = b[j];
          }
        }
        System.out.println(a[0]);
      }
    }
  }
`;
  const interpreter = new Java8Interpreter();
  const syntaxError = interpreter.checkSyntaxError(text);
  interpreter.stdin(`5 2
  3 1
  3 1
  10 3
  1 10
  10 1
  8 3
  0 0`);
  const map = new Map<string, ArrayBuffer>();
  interpreter.setFileList(map);
  // let ss = null;
  //  {
  //   let rr = interpreter.startStepExecution(text);

  //   while(interpreter.isStepExecutionRunning())
  //   {
  //     rr = interpreter.stepExecute();
  //     ss = interpreter.getCurrentState().make();
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
