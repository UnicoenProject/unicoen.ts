// tslint:disable
import { Java8Engine, Java8Mapper, CPP14Mapper, CPP14Engine } from '.';

try {
  const text = String.raw`
  #include <stdio.h>
#include <string.h>

int main(void)
{
	char str1[10], str2[10];
	int i;
  scanf("%d", &i);
	printf("第1の文字列を入力してください: ");
	scanf("%s", str1);
	printf("第2の文字列を入力してください: ");
	scanf("%s", str2);

	/* 文字列の長さを確認する */
	printf("%s は %d 文字の長さです\n", str1, strlen(str1));
	printf("%s は %d 文字の長さです\n", str2, strlen(str2));
	

	/* 文字列を比較する */
	i = strcmp(str1, str2);
	if (!i)
		printf(" 文字列が等しい.\n");
	else if (i<0)
		printf("%sは %s\nより小さい\n",str1,str2);
	else
		printf("%sは %s\nより大きい\n", str1, str2);

	/* 十分なスペースがあればstr2をstr1の最後に連結する */
	if (strlen(str1) + strlen(str2) < 80)
	{
		strcat(str1, str2);
		printf("%s\n", str1);
	}

	/* str2をstr1にコピーする*/
	strcpy(str1, str2);
	printf("%s %s\n", str1, str2);
	
	return 0;
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
  //   while(engine.isStepExecution5Running())
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
