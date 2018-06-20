import unicoen from './unicoen';

const text = `int main()
{
	int x = 5;
	int y = scanf("%d",&x);
	return x;
}`;
const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
let r = engine.startStepExecution(tree);
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
r = engine.stepExecute();
console.log(r);
