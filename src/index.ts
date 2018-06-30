import unicoen from './unicoen';

const text = String.raw`int main(void){
	FILE *fp ;
	char buf[256]={0};
	if((fp=fopen("code.txt","r"))!= 0){
			/*ファイルの終わりまで繰り返し読み込む*/
			while( fgets(buf,256,fp) != 0 ){
					printf("%s",buf);
			}
	}
	return 0;
}`;

const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
engine.stdin('10-2.3');
const map = new Map<string,ArrayBuffer>();
map.set('code.txt', new ArrayBuffer(1024));
engine.setFileList(map);
const r = engine.execute(tree);
console.log(r);
