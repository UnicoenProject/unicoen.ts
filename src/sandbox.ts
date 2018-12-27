import { CPP14Interpreter } from './interpreter/CPP14/CPP14Interpreter';
// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
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
