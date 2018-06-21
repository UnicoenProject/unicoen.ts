import unicoen from './unicoen';

const text = `int main()
{
	int x = 5;
	double d = 3;
	int y = scanf("%d-%f",&x, &d);
	return x;
}`;
const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
let r = engine.startStepExecution(tree);
engine.stdin('10-1.5');
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
console.log(r);
