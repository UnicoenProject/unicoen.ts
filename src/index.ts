import unicoen from './unicoen';

const text = `int main(){return 0;}`;
const cmapper = new unicoen.CPP14Mapper();
const tree = cmapper.parse(text);
const engine = new unicoen.CPP14Engine();
const r = engine.execute(tree);
