// tslint:disable:no-trailing-whitespace
import { assert } from 'chai';
import {
  CPP14Engine,
  CPP14Interpreter,
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
} from '..';

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
    ret: 1.4142135623746899,
  },
  {
    input: String.raw`int main()
    {
      int x = fmin(2,3);
      int y = printf("%u\n",-12345);
      return x+y;
    }`,
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
    ret: 12.3,
    stdin: '10-2.3',
  },
  {
    input: `int main(){
      char moji[] = "123456789";
      moji[3]='0';
      return moji[3] + moji[4];
    }`,
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
    ret: 1,
  },
  {
    input: `int main(void)
    {
      int a, c;
      double b;
      a = 31 / 3;
      b = 3.14;
      c = a * b;
      return c;
    }`,
    ret: 31,
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
    ret: 8,
  },
  {
    input: String.raw`int main(void)
    {
      char ch;
      ch = getchar();
      printf("%cが入力された\n",ch);
      while (ch != 'q') {
        ch = getchar();
        printf("%cが入力された\n",ch);
      }
      printf("qが入力されました\n");
      return 0;
    }`,
    stdin: '123q',
    stdout: '1が入力された\n2が入力された\n3が入力された\nqが入力された\nqが入力されました\n',
  },
  {
    input: String.raw`int main(void)
    {
      int n, m;
      n = '\a';
      m = '\t';
      printf("a:\t%d\n", '\a');
      printf("t:\t%d\n", '\t');
      printf("n:\t%d\n", '\n');
      printf("\101,\x42,C");
      return 0;
    }`,
    stdout: 'a:	7\nt:	9\nn:	10\nA,B,C',
  },
  {
    input: String.raw`#include <stdio.h>
    int fact(int n);
    int main(void)
    {
      int n=5, f;
      f = fact(n);
      printf("%d != %d", n, f);
      return 0;
    }

    int fact(int n)
    {
      return (1 < n) ? n * fact(n - 1): 1;
    }`,
    stdout: '5 != 120',
  },
  {
    input: String.raw`#include <stdio.h>
    #include <string.h>
    void multiply_by_int(char *n, int m);
    int main()
    {
      int input, i;
      char prod[30] = "1"; /*prod[0]に1のくらいの数が入る*/
      char answer[30] = {};/*最後に反転させる*/
      //printf("Enter a positive integer with up to 3 digits.\n");
      scanf("%d", &input);
      if (input < 0 || 999 < input)//範囲外
      {
        printf("OutOfRange.\n");
        return -1;
      }
      for (i = 2; i <= input; ++i)
      {
        multiply_by_int(prod, i);
      }
      double m = fmax(1,2);
      int len = strlen(prod);
      for (i = 0;; ++i)
      {
        if (*(prod + i) == '\0')
          break;
        answer[i] = (*(prod + (len - i - 1)));
      }
      printf("%d! = %s\n", input, answer);
      return 0;
    }
    //文字列の掛け算をする。
    void multiply_by_int(char *n, int m)
    {
      int size = strlen(n)-1;
      int i = 0;
      int c = 0;
      while (1)
      {
        int x = (n[i] == '\0') ? 0:(int)n[i]-(int)'0';//i番目の位数
        int a = x*m + c;//i番目の位の数*m
        int b = a % 10;//↑の1のくらいの数
        c = a / 10;//↑↑の10のくらいの数
        n[i] = b + (int)'0';//i番目のくらいの数を書き換え
        if (i < size || c != 0)
          ++i;
        else
          break;
      }
    }`,
    stdin: '15',
    stdout: '15! = 1307674368000\n',
  },
  {
    input: String.raw`int main()
    {
      int count[4][5];
      count[2][3] = 10;
      return count[2][3];
    }`,
    ret: 10,
  },
  {
    input: String.raw`int main()
    {
      int a[5], *p;
      a[2] = 5;
      printf("%d",a[2]);
      p = &a[2];
      *p = 7;
      return a[2];
    }`,
    ret: 7,
    stdout: '5',
  },
  {
    input: String.raw`
    struct point {
      　int x;
      　int y;
  　} p1, p2;
    int main()
    {
      p1.x = 1;
      p1.y = 2;
      return p1.x + p1.y;
    }`,
    ret: 3,
  },
  {
    input: String.raw`
    typedef struct node *link;
    struct node {
      int item;
      link next;
    };
    int main(void)
    {
      link head;

      head = malloc(sizeof(*head));
      head->item = 5;
      head->next = head;
      printf("head->item = %d\n", head->item);
    }`,
    stdout: 'head->item = 5\n',
  },
  {
    input: String.raw`
    #define N 100
    typedef struct point Point;
    struct point {
      int x;
      int y;
    };
    Point Point_add(Point, Point);
    int main(void)
    {
      Point p1, p2, p3;
      p1.x = N; p1.y=N;
      p2.x = 1; p2.y = 2;
      p3 = Point_add(p1, p2);
      printf("%d %d\n", p3.x, p3.y);
      return p3.x + p3.y;
    }
    Point Point_add(Point a, Point b)
    {
      Point c;
      c.x = a.x + b.x;
      c.y = a.y + b.y;
      return c;
    }`,
    ret: 203,
    stdout: '101 102\n',
  },
  {
    input: String.raw`
    int main() {
      char str[] = "ABC";
      char str1[4];
      strcpy(str1, str);
      char str2[] = "ABD";
      char str3[] = "B";
      char str4[3] = "A";
      strcat(str4, str3);
      printf("strcmp(%s, %s) = %d\n", str, str1, strcmp(str, str1));
      printf("strcmp(%s, %s) = %d\n", str, str2, strcmp(str, str2));
      printf("strcmp(%s, %s) = %d\n", str, str3, strcmp(str, str3));
      printf("strcmp(%s, %s) = %d\n", str, str4, strcmp(str, str4));
      return 0;
    }`,
    stdout:
      'strcmp(ABC, ABC) = 0\nstrcmp(ABC, ABD) = -1\nstrcmp(ABC, B) = -1\nstrcmp(ABC, AB) = 1\n',
  },
  {
    input: String.raw`
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
    }`,
    stdout: `inum=123
inum=0
inum=1
inum=0
inum=0
inum=0
inum=123
`,
  },
  {
    input: String.raw`
    int main() {
      {
        int sqr[3][3] = {
        1, 2, 3,
        {4, 5},
        {7}
        };
        for (int i = 0; i < 3; ++i) {
          for (int k = 0; k < 3; ++k) {
            printf("%d,", sqr[i][k]);
          }
        }
      }
      {
        int sqr[][3] = {
          1, 2, 3,
          {4, 5},
          {7}
          };
          int* start = &sqr[0][0];
          for (int i = 0; i < 9; ++i) {
            printf("%d,", start[i]);
          }
      }
      return 0;
    }`,
    stdout: '1,2,3,4,5,0,7,0,0,1,2,3,4,5,0,7,0,0,',
  },
  {
    input: String.raw`
    int main() {
      int sqr[2][3][4]= {
        { {1,2,3,4},
          {5,6,7,8},
          {9,10,11,12}, },
        {  {13,14,15,16},
          {17,18,19,20},
          {21,22,23,24}, },
      };
      for (int i = 0; i < 2; ++i) {
        for (int k = 0; k < 3; ++k) {
          for (int m = 0; m < 4; ++m) {
            printf("%d,", sqr[i][k][m]);
          }
          printf("\n");
        }
        printf("\n");
      }
      int* start = &sqr[0][0][0];
      for (int i = 0; i < 24; ++i) {
        printf("%d,", start[i]);
      }
      return 0;
    }`,
    stdout: `1,2,3,4,\n5,6,7,8,\n9,10,11,12,\n
13,14,15,16,\n17,18,19,20,\n21,22,23,24,\n
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,`,
  },
  {
    input: String.raw`
    #include <stdio.h>
    main()
    {
      char    buff[30];
      gets(buff);
      printf("[%s]", buff);
    }`,
    stdin: 'Hello, unicoen.ts\n',
    stdout: '[Hello, unicoen.ts]',
  },
];

describe('CPP14 node exec', () => {
  for (const test of testData) {
    if (test.node) {
      it(test.input, () => {
        const node = test.node();
        const engine = new CPP14Engine();
        engine.setDebugMode(false);
        const ret = engine.execute(node);
        assert.equal(ret, test.ret);
      });
    }
  }
});

describe('CPP14 mapper', () => {
  for (const test of testData) {
    if (test.node) {
      const mapper = new CPP14Mapper();
      const text = test.input;
      const tree = mapper.parseToUniTree(text);
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }

    it(test.input + ' exec', () => {
      const interpreter = new CPP14Interpreter();
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
