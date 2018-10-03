// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdio.h>
int main(void)
{
	int i;
	printf("1から4までの数を入力してください: ");
	scanf("%d", &i);
	switch (i) {
	case 1:
		printf("ひとつ¥n");
		break;
	case 2:
		printf("ふたつ¥n");
		break;
	case 3:
		printf("みっつ¥n");
		break;
	case 4:
		printf("よっつ¥n");
		break;
	default:
		printf("認識できない数字です¥n");
	}
	return 0;
}`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('123');
  const map = new Map<string, ArrayBuffer>();
  engine.setFileList(map);
    //  {
    //   let rr = engine.startStepExecution(tree);
    //   let ss = engine.getCurrentState().make();
    //   while(engine.isStepExecutionRunning())
    //   {
    //     rr = engine.stepExecute();
    //     ss = engine.getCurrentState().make();
    //   }
    // }
  const r = engine.execute(tree);
  const out = engine.getStdout();
  const state = engine.getCurrentState().make();
  console.log(r);
  console.log(out);
  console.log(state);
} catch (e) {
  console.error(e);
}
