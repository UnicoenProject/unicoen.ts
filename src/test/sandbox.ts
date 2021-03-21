import { CPP14Interpreter } from '../interpreter/CPP14/CPP14Interpreter';
import { Java8Interpreter } from '../interpreter/Java8/Java8Interpreter';
import { Python3Interpreter } from '../interpreter/Python3/Python3Interpreter';
//tslint:disable
const t = String.raw`
#include <stdio.h>
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
}`;
const i = new CPP14Interpreter();
const ret = i.execute(t);
const out = i.getStdout();
console.log(ret);
console.log(out);
