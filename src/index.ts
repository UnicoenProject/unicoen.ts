import unicoen from './unicoen';

const text = `int main()
{
	int x = 5;
	double y = 3;
	scanf("%d-%f",&x, &y);
	return x + y;
}`;
const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
engine.stdin('10-2.3');
const r = engine.execute(tree);
console.log(r);
