import { assert } from 'chai';
import {
  CodeLocation,
  CodeRange,
  Java8Engine,
  Java8Interpreter,
  Java8Mapper,
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

const wrapMainFunction = (text: string) => {
  return String.raw`
  import java.util.*;
  public class Main {
    public static void main(String[] args) {
      ${text}
    }
  }`;
};

const testData = [
  {
    input: wrapMainFunction('System.out.println("3+2は" + (3 + 2) + "です。");'),
    node: null,
    ret: null,
    stdin: null,
    stdout: '3+2は5です。\n',
  },
  {
    input: wrapMainFunction(`
    for (int i = 0; i < 3; i++) {
      System.out.println(i);
    }
    System.out.println("end");
    `),
    node: null,
    ret: null,
    stdin: null,
    stdout: '0\n1\n2\nend\n',
  },
  {
    input: wrapMainFunction(`
      int[] arr = new int[5];
      arr[2] = 9;
      return arr[2];
    `),
    ret: 9,
  },
  {
    input: wrapMainFunction(`
    Scanner sc = new Scanner(System.in);
    for (int i = 0; i < 3; i++) {
      int n = sc.nextInt();
      System.out.println(n);
    }
    System.out.println("end");
    `),
    node: null,
    ret: null,
    stdin: '3 5 9',
    stdout: '3\n5\n9\nend\n',
  },
  {
    input: wrapMainFunction(`
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
    `),
    node: null,
    ret: null,
    stdin: '5 2\n3 1\n3 1\n10 3\n1 10\n10 1\n8 3\n0 0',
    stdout: '4\n4\n',
  },
];

describe('Java8 node exec', () => {
  for (const test of testData) {
    if (test.node == null) {
      continue;
    }
    it(test.input, () => {
      const node = test.node();
      const engine = new Java8Engine();
      engine.setDebugMode(false);
      const ret = engine.execute(node);
      assert.equal(ret, test.ret);
    });
  }
});

describe('Java8 mapper', () => {
  for (const test of testData) {
    if (test.node) {
      const mapper = new Java8Mapper();
      const text = test.input;
      const tree = mapper.parseToUniTree(text);
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }

    it(test.input + ' exec', () => {
      const interpreter = new Java8Interpreter();
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
