import { assert } from 'chai';
import {
  CodeLocation,
  CodeRange,
  Python3Engine,
  Python3Interpreter,
  Python3Mapper,
  UniArray,
  UniBinOp,
  UniBlock,
  UniFor,
  UniFunctionDec,
  UniIdent,
  UniIf,
  UniIntLiteral,
  UniMethodCall,
  UniParam,
  UniProgram,
  UniReturn,
  UniUnaryOp,
  UniVariableDec,
  UniVariableDef,
} from '..';

const testData = [
  {
    input: 'print(10)\n',
    node: null,
    ret: null,
    stdin: null,
    stdout: '10\n',
  },
  {
    input: `
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
`,
    node: null,
    ret: null,
    stdin: '5 2\n3 1\n3 1\n10 3\n1 10\n10 1\n8 3\n0 0',
    stdout: '4\n4\n',
  },
];

describe('Python3 node exec', () => {
  for (const test of testData) {
    if (test.node == null) {
      continue;
    }
    it(test.input, () => {
      const node = test.node();
      const engine = new Python3Engine();
      engine.setDebugMode(false);
      const ret = engine.execute(node);
      assert.equal(ret, test.ret);
    });
  }
});

describe('Python3 mapper', () => {
  for (const test of testData) {
    if (test.node) {
      const mapper = new Python3Mapper();
      const text = test.input;
      const tree = mapper.parseToUniTree(text);
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }

    it(test.input + ' exec', () => {
      const interpreter = new Python3Interpreter();
      if (test.stdin) {
        interpreter.stdin(test.stdin);
      }
      const ret = interpreter.execute(test.input);
      const stdout = interpreter.getStdout();
      if (test.stdout) {
        assert.equal(stdout, test.stdout);
      }
      if (test.ret) {
        assert.equal(ret, test.ret);
      }
    });
  }
});
