import { assert } from 'chai';
import {
  CodeLocation,
  CodeRange,
  CPP14Engine,
  CPP14Mapper,
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
} from '.';

const testData = [
  {
    input: 'int main(){}',
    node: () => {
      const mainBlock = new UniBlock(null, []);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: null,
  },
  {
    input: 'int main(){return 0;}',
    node: () => {
      const returnValue = new UniIntLiteral(0);
      const returnStatement = new UniReturn(returnValue);
      const mainBlock = new UniBlock(null, [returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 0,
  },
  {
    input: 'int main(){int i=0; return i;}',
    node: () => {
      const iEq0 = new UniVariableDef('i', new UniIntLiteral(0), null);
      const iDec = new UniVariableDec([], 'int', [iEq0]);

      const returnStatement = new UniReturn(new UniIdent('i'));
      const mainBlock = new UniBlock(null, [iDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 0,
  },
  {
    input: 'int main(){int sum=0;for(int i=1;i<=10;++i){sum += i;}return sum;}',
    node: () => {
      const sumEq0 = new UniVariableDef('sum', new UniIntLiteral(0), null);
      const sumDec = new UniVariableDec([], 'int', [sumEq0]);

      const i = new UniVariableDef('i', new UniIntLiteral(1), null);
      const iDec = new UniVariableDec([], 'int', [i]);
      const cond = new UniBinOp('<=', new UniIdent('i'), new UniIntLiteral(10));
      const step = new UniUnaryOp('++', new UniIdent('i'));

      const sumPlusI = new UniBinOp('+=', new UniIdent('sum'), new UniIdent('i'));
      const forBlock = new UniBlock(null, [sumPlusI]);

      const forState = new UniFor(iDec, cond, step, forBlock);

      const sum = new UniIdent('sum');
      const returnStatement = new UniReturn(sum);
      const mainBlock = new UniBlock(null, [sumDec, forState, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 55,
  },
  {
    input:
      'int add(int x, int y){return x+y;} int main(){int a=2; int b=3; int c=add(a,b); return c;}',
    node: () => {
      const addReturn = new UniReturn(new UniBinOp('+', new UniIdent('x'), new UniIdent('y')));
      const addBlock = new UniBlock(null, [addReturn]);
      const addFunc = new UniFunctionDec(
        'add',
        [],
        'int',
        [
          new UniParam([], 'int', [new UniVariableDef('x', null, null)]),
          new UniParam([], 'int', [new UniVariableDef('y', null, null)]),
        ],
        addBlock,
      );

      const aDec = new UniVariableDec([], 'int', [
        new UniVariableDef('a', new UniIntLiteral(2), null),
      ]);
      const bDec = new UniVariableDec([], 'int', [
        new UniVariableDef('b', new UniIntLiteral(3), null),
      ]);
      const cDec = new UniVariableDec([], 'int', [
        new UniVariableDef(
          'c',
          new UniMethodCall(null, new UniIdent('add'), [new UniIdent('a'), new UniIdent('b')]),
          null,
        ),
      ]);

      const returnStatement = new UniReturn(new UniIdent('c'));
      const mainBlock = new UniBlock(null, [aDec, bDec, cDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [addFunc, mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 5,
  },
  {
    input: 'int main(){int i=1; {int i=100; i+=20;} i+=50; return i;}',
    node: () => {
      const iEq1 = new UniVariableDef('i', new UniIntLiteral(1), null);
      const iDec = new UniVariableDec([], 'int', [iEq1]);

      const i = new UniVariableDef('i', new UniIntLiteral(100), null);
      const iInBlockDec = new UniVariableDec([], 'int', [i]);
      const iPlus20 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(20));
      const forBlock = new UniBlock(null, [iInBlockDec, iPlus20]);

      const iPlus50 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(50));

      const returnStatement = new UniReturn(new UniIdent('i'));
      const mainBlock = new UniBlock(null, [iDec, forBlock, iPlus50, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 51,
  },
  {
    // tslint:disable-next-line:max-line-length
    input:
      'int fibo(int n){if(n<2) return n; else return fibo(n-1) + fibo(n-2);} int main(){int a = fibo(9);return a;}',
    node: () => {
      const fiboReturn1 = new UniReturn(new UniIdent('n'));
      const fiboReturn2 = new UniReturn(
        new UniBinOp(
          '+',
          new UniMethodCall(null, new UniIdent('fibo'), [
            new UniBinOp('-', new UniIdent('n'), new UniIntLiteral(1)),
          ]),
          new UniMethodCall(null, new UniIdent('fibo'), [
            new UniBinOp('-', new UniIdent('n'), new UniIntLiteral(2)),
          ]),
        ),
      );
      const fiboIf = new UniIf(
        new UniBinOp('<', new UniIdent('n'), new UniIntLiteral(2)),
        fiboReturn1,
        fiboReturn2,
      );
      const fiboBlock = new UniBlock(null, [fiboIf]);
      const fiboFunc = new UniFunctionDec(
        'fibo',
        [],
        'int',
        [new UniParam([], 'int', [new UniVariableDef('n', null, null)])],
        fiboBlock,
      );

      const aDec = new UniVariableDec([], 'int', [
        new UniVariableDef(
          'a',
          new UniMethodCall(null, new UniIdent('fibo'), [new UniIntLiteral(9)]),
          null,
        ),
      ]);

      const returnStatement = new UniReturn(new UniIdent('a'));
      const mainBlock = new UniBlock(null, [aDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [fiboFunc, mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 34,
  },
  {
    input: 'int main(){int arr[5] = {1, 2, 3};return arr[1];}',
    node: () => {
      const arrDef = new UniVariableDef(
        'arr',
        new UniArray([new UniIntLiteral(1), new UniIntLiteral(2), new UniIntLiteral(3)]),
        '[5]',
      );
      const arrDec = new UniVariableDec([], 'int', [arrDef]);

      const returnStatement = new UniReturn(
        new UniBinOp('[]', new UniIdent('arr'), new UniIntLiteral(1)),
      );
      const mainBlock = new UniBlock(null, [arrDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main', [], 'int', [], mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 2,
  },
  {
    input: 'int main(){int x = abs(-3);return x;}',
    node: null,
    ret: 3,
  },
  {
    input: `int main()
    {
      double x = 1.0;
      double e = 0.0000000005;
      int i;
      for(i=0;e<fabs(x*x-2);++i)
      {
        x -= ((x*x)-2) / (2*x);
      }

      return x;
    }`,
    node: null,
    ret: 1.4142135623746899,
  },
  {
    input: String.raw`int main()
    {
      int x = fmin(2,3);
      int y = printf("%u\n",-12345);
      return x+y;
    }`,
    node: null,
    ret: 13, // "4294954951\n" + 2
  },
  {
    input: `int main()
    {
      int x = 5;
      double y = 3;
      scanf("%d-%f",&x, &y);
      return x + y;
    }`,
    node: null,
    ret: 12.3,
    stdin: '10-2.3',
  },
  {
    input: `int main(){
      char moji[] = "123456789";
      moji[3]='0';
      return moji[3] + moji[4];
    }`,
    node: null,
    ret: 101, // ASCII Code 0:48, 5:53
  },
  {
    input: `#include <stdio.h>
    struct point {
        int x;
        int y;
    };
    int main()
    {
        struct point p1;
        struct point p2 = {3, 4};
        struct point p3 = {5, 6};
        p1.x = 1;
        p1.y = 0;
        p3 = p1;
        return p1.x + p1.y + p2.x + p2.y + p3.x + p3.y;
    }`,
    node: null,
    ret: 9,
  },
  {
    input: `#include <stdio.h>
    struct point {
        int x;
        int y;
    };
    struct rectangle {
      struct point p1;
      struct point p2;
    };
    int main()
    {
        struct rectangle r;
        struct rectangle r2;
        r.p1.x = 10;
        r.p1.y = 10;
        r.p2.x = 10;
        r.p2.y = 10;
        return r.p1.x + r.p1.y + r.p2.x + r.p2.y;
    }`,
    node: null,
    ret: 40,
  },
  {
    input: `#include <stdio.h>
      struct point {
        int x;
        int y;
    };
    void add_point(struct point *pp)
    {
      pp->x = (*pp).x + 1;
      (*pp).y = pp->y + 2;
    };
    int main(void)
    {
      struct point p = {10,10};
      add_point(&p);
      printf("px=%d,py=%d", p.x,p.y);
      return 0;
    }`,
    node: null,
    stdout: 'px=11,py=12',
  },
  {
    input: `int main(void)
    {
      int *p;
      if ((p = malloc(sizeof(int)*10000000)) == NULL) {
        exit(1);
      }
      return 0;
    }`,
    node: null,
    ret: 1,
  },
  {
    input: `void swap1(int* x, int* y){
        int s = *x;
        if(s<2){
            *x = *y;
            *y = s;
        }
    }
    void swap2(int *z, int *w){
        int t = *z;
        if(t<3){
            *z = *w;
            *w = t;
        }
    }
    void swap3(int *w, int *o){
        int u = *w;
        if(u<4){
            *w = *o;
            *o = u;
        }else{
            *o = 6;
            swap1(o,w);
        }
    }
    int main()
    {
        int a = 1, b = 2, c = 3, d = 4, e = 5;
        swap1(&a,&b);
        swap3(&a,&c);
        swap2(&e,&b);
        swap3(&d,&e);
        swap2(&b,&c);
        swap1(&a,&d);
        printf("a=%d,b=%d,c=%d,d=%d,e=%d",a,b,c,d,e);
        return 0;
    }`,
    node: null,
    stdout: 'a=3,b=2,c=1,d=4,e=6',
  },
  {
    input: `#include<stdio.h>
    int f(int* pn){
        int n = (*pn);
        int r = 1;
        if(1<=n){
            (*pn) = n - 1;
            r = n * f(pn);
        }
        return r;
    }
    int main()
    {
        int n = 4;
        int r = f(&n);
        return r;
    }`,
    node: null,
    ret: 24,
  },
  {
    input: `#include<stdio.h>
    int main()
    {
        int i,j,n=3;
        int*ps[3];
        for(i=0; i<n; ++i){
            ps[i]=malloc(sizeof(int)*n);
            for(j=0; j<n; ++j){
                ps[i][j]=i*i + j*j;
            }
        }
        for(i=0; i<n; ++i){
            if(ps[i][2]%2==0)
                free(ps[i]);
        }
        return ps[1][0] + ps[1][1] + ps[1][2];
    }`,
    node: null,
    ret: 8,
  },
  {
    input: String.raw`#include <stdio.h>
    int main() {
      int a=3;
      int sum = 0;
      switch (a) {
        case 1:
          printf("a = 1\n");
          break;
        case 3:
          printf("a = 3\n");
          sum += 3;
        case 5:
          printf("a = 5\n");
          sum += 5;
          break;
        default:
          printf("others\n");
          break;
      }
      return sum;
    }`,
    node: null,
    ret: 8,
  },
];

describe('node exec', () => {
  for (const test of testData) {
    if (test.node == null) {
      continue;
    }
    it(test.input, () => {
      const node = test.node();
      const engine = new CPP14Engine();
      engine.setDebugMode(false);
      const ret = engine.execute(node);
      assert.equal(ret, test.ret);
    });
  }
});

describe('mapper', () => {
  for (const test of testData) {
    const cmapper = new CPP14Mapper();
    const text = test.input;
    const tree = cmapper.parse(text);
    if (test.node != null) {
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }
    it(test.input + ' exec', () => {
      const engine = new CPP14Engine();
      if (test.stdin) {
        engine.stdin(test.stdin);
      }
      const ret = engine.execute(tree);
      const stdout = engine.getStdout();
      if (test.stdout) {
        assert.equal(stdout, test.stdout);
      }
      if (test.ret) {
        assert.equal(ret, test.ret);
      }
    });
  }
});
