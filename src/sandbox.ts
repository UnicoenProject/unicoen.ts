// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdlib.h>
#define Item int 
#define link struct node*
struct node { 
    int item; 
    link next; 
};
// struct node* reverse(link x)
// { 
//   link t, y = x, r = NULL;
//   while (y != NULL)
//   { t = y->next; y->next = r; r = y; y = t; }
//   return r;
// }
int main(void)
{
    link head,a, b, c, d, t;
    a = malloc(sizeof(*a)); b = malloc(sizeof(*b));
    c = malloc(sizeof(*c)); d = malloc(sizeof(*d));
    a->item = 10; b->item = 20; c->item = 30; d->item = 40;
    a->next = b; b->next = c; c->next = d; d->next = NULL;
    head = a;
    for (t = head; t != NULL; t = t->next){
        printf("%d\n", t->item);
    }
    return 0;
}
  `;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  //   {
  //     let rr = engine.startStepExecution(tree);
  //     let ss = engine.getCurrentState().make();
  //     while(engine.isStepExecutionRunning())
  //     {
  //       rr = engine.stepExecute();
  //       ss = engine.getCurrentState().make();
  //     }
  //   }
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
