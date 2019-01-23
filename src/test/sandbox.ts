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
    Scanner sc = new Scanner(System.in);
    for (int i = 0; i < 3; i++) {
      int n = sc.nextInt();
      System.out.println(n);
    }
    System.out.println("end");
  }
}
`;
  const interpreter = new Java8Interpreter();
  const syntaxError = interpreter.checkSyntaxError(text);
  interpreter.stdin('10\n+\n15\n-\n5\n=\n20');
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
