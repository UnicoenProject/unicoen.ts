import unicoen from './unicoen';

// const text = `int main(){
// 	int arr1[5];//乱数
// 	int arr2[5] = {};//0,0,0,0,0
// 	int arr3[5] = {1,2};//0,0,0
// 	int arr4[] = {1,2,3,4};
// 	return arr[1];
// }`;

const text = String.raw`int main(){
	char moji[] = "123456789";
	moji[3]='0';
	return moji[3] + moji[4];
}`;

const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
engine.stdin('10-2.3');
const r = engine.execute(tree);
console.log(r);
