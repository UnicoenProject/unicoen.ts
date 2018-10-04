// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdio.h>
#include <string.h>
void multiply_by_int(char *n, int m); 
int main()
{
	int input, i;
	char prod[30] = "1"; /*prod[0]に1のくらいの数が入る*/
	char answer[30] = {};/*最後に反転させる*/
	printf("Enter a positive integer with up to 3 digits.\n");
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
}
`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(CPP14Engine.replaceDefine(text));
  const engine = new CPP14Engine();
  engine.stdin('15');
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
