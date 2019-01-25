import { CPP14Interpreter } from '../interpreter/CPP14/CPP14Interpreter';
import { Java8Interpreter } from '../interpreter/Java8/Java8Interpreter';
import { Python3Interpreter } from '../interpreter/Python3/Python3Interpreter';
// tslint:disable
// const t = String.raw`
// int main() {
//     int arr[] = {0,0,0,0,0};
//     arr[2] = 9;
//     return arr[2];
// }`;
// const i = new CPP14Interpreter();
// const ret = i.execute(t);
// console.log(ret);

try {
  const text = `
while True:
  n, r = map(int, input().split())
  if n == 0:
    break
  a = [0] * n
  b = [0] * n
  for i in range(n):
    a[i] = b[i] = n - i
  for i in range(r):
    p, c = map(int, input().split())
    p = p - 1
    for j in range(c):
      b[j] = a[p + j]
    for j in range(p):
      b[c + j] = a[j]
    for j in range(p + c):
      a[j] = b[j]
  print(a[0])
`;
  const interpreter = new Python3Interpreter();
  const syntaxError = interpreter.checkSyntaxError(text);
  interpreter.stdin(`5 2\n3 1\n3 1\n10 3\n1 10\n10 1\n8 3\n0 0`);
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
