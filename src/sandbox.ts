import { CPP14Mapper, CPP14Engine } from ".";

try {
  const text = String.raw`int main(void){
    FILE *fp ;
    int text[] = {'S', 'n', 'o', 'o', 'p', 'y', '\0'};
    int i;
    if((fp=fopen("out.txt","w")) != 0){
            for ( i = 0; i < 6; i++ ) {
        fputc(text[i], fp);
            }
    }
    return 0;
}`;

  const cmapper = new CPP14Mapper();
  const tree = cmapper.parse(text);
  const engine = new CPP14Engine();
  engine.stdin('10-2.3');
  const map = new Map<string,ArrayBuffer>();
  engine.setFileList(map);
  const r = engine.execute(tree);
  const out = engine.getStdout();
  console.log(r);
  console.log(out);
} catch (e) {
  console.error(e);
}
