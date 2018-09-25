// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`void swap1(int* x, int* y){
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
    printf("a=%d,b=%d,c=%d,d=%d,e=%d\n",a,b,c,d,e);
    return 0;
}`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  {
    let rr = engine.startStepExecution(tree);
    let ss = engine.getCurrentState().make();
    while(engine.isStepExecutionRunning())
    {
      rr = engine.stepExecute();
      ss = engine.getCurrentState().make();
    }
  }
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
