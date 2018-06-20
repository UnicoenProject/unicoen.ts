import unicoen from './unicoen';

const text = `int main()
{
	int x = fmin(2,3);
	int y = printf("%u\\n",-12345);
	return x+y
}`;
const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
const r = engine.execute(tree);
console.log(r);
