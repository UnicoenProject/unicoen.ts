import unicoen from './unicoen';
const cmapper = new unicoen.CPP14Mapper();
const text = `int main(){
  int i=1;
  return i;
}`;
const tree = cmapper.parse(text);
const engine = new unicoen.Engine();
let ret = engine.startStepExecution(tree); 
ret = engine.stepExecute();
ret = engine.stepExecute();
ret = engine.stepExecute();
ret = engine.stepExecute();
ret = engine.stepExecute();
ret = engine.stepExecute();
ret = engine.stepExecute();
console.log(ret);
