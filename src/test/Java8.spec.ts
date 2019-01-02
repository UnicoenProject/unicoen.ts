import { assert } from 'chai';
import {
  CodeLocation,
  CodeRange,
  Java8Engine,
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
  return String.raw`public class Main {
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
  // {
  //   input: `int main()
  //   {
  //     double x = 1.0;
  //     double e = 0.0000000005;
  //     int i;
  //     for(i=0;e<fabs(x*x-2);++i)
  //     {
  //       x -= ((x*x)-2) / (2*x);
  //     }

  //     return x;
  //   }`,
  //   node: null,
  //   ret: 1.4142135623746899,
  // },
  // {
  //   input: String.raw`int main()
  //   {
  //     int x = fmin(2,3);
  //     int y = printf("%u\n",-12345);
  //     return x+y;
  //   }`,
  //   node: null,
  //   ret: 13, // "4294954951\n" + 2
  // },
  // {
  //   input: `int main()
  //   {
  //     int x = 5;
  //     double y = 3;
  //     scanf("%d-%f",&x, &y);
  //     return x + y;
  //   }`,
  //   node: null,
  //   ret: 12.3,
  //   stdin: '10-2.3',
  // },
  // {
  //   input: `int main(){
  //     char moji[] = "123456789";
  //     moji[3]='0';
  //     return moji[3] + moji[4];
  //   }`,
  //   node: null,
  //   ret: 101, // ASCII Code 0:48, 5:53
  // },
];

describe('node exec', () => {
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

describe('mapper', () => {
  for (const test of testData) {
    const cmapper = new Java8Mapper();
    const text = test.input;
    const tree = cmapper.parseToUniTree(text);
    if (test.node != null) {
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }
    it(test.input + ' exec', () => {
      const engine = new Java8Engine();
      if (test.stdin) {
        engine.stdin(test.stdin);
      }
      const ret = engine.execute(tree);
      if (test.stdout) {
        const out = engine.getStdout();
        assert.equal(out, test.stdout);
      } else if (test.ret) {
        assert.equal(ret, test.ret);
      }
    });
  }
});