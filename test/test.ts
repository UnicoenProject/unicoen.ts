import { assert } from 'chai';
import CodeLocation from '../src/node_helper/CodeLocation';
import CodeRange from '../src/node_helper/CodeRange';
import UniNode from '../src/node/UniNode';
import UniExpr from '../src/node/UniExpr';
import UniArray from '../src/node/UniArray';
import UniNumberLiteral from '../src/node/UniNumberLiteral';
import UniVariableDef from '../src/node/UniVariableDef';
import UniReturn from '../src/node/UniReturn';
import UniBlock from '../src/node/UniBlock';
import UniFunctionDec from '../src/node/UniFunctionDec';
import UniParam from '../src/node/UniParam';
import UniProgram from '../src/node/UniProgram';
import Engine from '../src/interpreter/Engine';
import UniVariableDec from '../src/node/UniVariableDec';
import UniIdent from '../src/node/UniIdent';
import UniFor from '../src/node/UniFor';
import UniBinOp from '../src/node/UniBinOp';
import UniUnaryOp from '../src/node/UniUnaryOp';
import UniIntLiteral from '../src/node/UniIntLiteral';
import UniMethodCall from '../src/node/UniMethodCall';
import UniIf from '../src/node/UniIf';
import CMapper from '../src/mapper/C/CMapper';
import CPP14Mapper from '../src/mapper/CPP14/CPP14Mapper';

describe('node_helper', () => {
  it(`CodeLocation`, () => {
    const codeLocation = new CodeLocation(1, 2);
    assert.equal(codeLocation.x, 1);
    assert.equal(codeLocation.y, 2);
  });
  it(`CodeRange`, () => {
    const start = new CodeLocation(1, 2);
    const end = new CodeLocation(5, 6);
    const codeRange = new CodeRange(start, end);
    assert.equal(codeRange.begin.x, 1);
    assert.equal(codeRange.end.y, 6);
  });
});

describe('node', () => {
  it(`int main(){return 0;}`, () => {
    const returnValue = new UniIntLiteral(0);
    const returnStatement = new UniReturn(returnValue);
    const mainBlock = new UniBlock('main', [returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 0);
  });

  it(`int main(){int i=0; return i;}`, () => {
    const iEq0 = new UniVariableDef('i', new UniIntLiteral(0), null);
    const iDec = new UniVariableDec([], 'int', [iEq0]);
    
    const returnStatement = new UniReturn(new UniIdent('i'));
    const mainBlock = new UniBlock(null, [iDec, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock(null, [mainFunc]);
    const program = new UniProgram(globalBlock);
    
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 0);
  });

  it(`int main(){int sum=0;for(int i=1;i<=10;++i){sum += i;}return sum;}`, () => {

    const sumEq0 = new UniVariableDef('sum', new UniIntLiteral(0),'');
    const sumDec = new UniVariableDec(null,'int', [sumEq0]);

    const i = new UniVariableDef('i', new UniIntLiteral(1),'');
    const iDec = new UniVariableDec(null,'int', [i]);
    const cond = new UniBinOp('<=', new UniIdent('i'), new UniIntLiteral(10));    
    const step = new UniUnaryOp('++_',new UniIdent('i'));
    
    const sumPlusI = new UniBinOp('+=', new UniIdent('sum'), new UniIdent('i')); 
    const forBlock = new UniBlock('for', [sumPlusI]);

    const forState = new UniFor(iDec, cond, step, forBlock);
    
    const sum = new UniIdent('sum');
    const returnStatement = new UniReturn(sum);
    const mainBlock = new UniBlock('main', [sumDec, forState, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 55);
  });

  it(`int add(int x, int y){return x+y;} int main(){int a=2; int b=3; int c=add(a,b); return c;}`, () => {
    const addReturn = new UniReturn(new UniBinOp('+',new UniIdent('x'),new UniIdent('y')));
    const addBlock = new UniBlock('main', [addReturn]);
    const addFunc = new UniFunctionDec('add',[],'int',[new UniParam([],'int', [new UniVariableDef('x', null, '')]), new UniParam([],'int', [new UniVariableDef('y', null, '')])],addBlock);
    
    const aDec = new UniVariableDec(null,'int', [new UniVariableDef('a', new UniIntLiteral(2),'')]);
    const bDec = new UniVariableDec(null,'int', [new UniVariableDef('b', new UniIntLiteral(3),'')]);
    const cDec = new UniVariableDec(null,'int', [new UniVariableDef('c', new UniMethodCall(null,'add',[new UniIdent('a'),new UniIdent('b')]),'')]);
    
    const returnStatement = new UniReturn(new UniIdent('c'));
    const mainBlock = new UniBlock('main', [aDec, bDec, cDec, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [addFunc, mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 5);
  });

  it(`int main(){int i=1; {int i=100; i+=20;} i+=50; return i;}`, () => {
    const iEq1 = new UniVariableDef('i', new UniIntLiteral(1),'');
    const iDec = new UniVariableDec(null,'int', [iEq1]);

    const i = new UniVariableDef('i', new UniIntLiteral(100),'');
    const iInBlockDec = new UniVariableDec(null,'int', [i]);
    const iPlus20 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(20)); 
    const forBlock = new UniBlock('block', [iInBlockDec, iPlus20]);

    const iPlus50 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(50)); 

    const returnStatement = new UniReturn(new UniIdent('i'));
    const mainBlock = new UniBlock('main', [iDec, forBlock, iPlus50, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 51);
  });  
  
  it(`int fibo(int n){if(n<2) return n; else return fibo(n-1) + fibo(n-2);} int main(){int a = fibo(9);return a;}`, () => {
    const fiboReturn1 = new UniReturn(new UniIdent('n'));
    const fiboReturn2 = new UniReturn(new UniBinOp(
      '+', new UniMethodCall(null,'fibo',[new UniBinOp('-',new UniIdent('n'), new UniIntLiteral(1))]), 
      new UniMethodCall(null,'fibo',[new UniBinOp('-',new UniIdent('n'), new UniIntLiteral(2))])));
    const fiboIf = new UniIf(new UniBinOp('<',new UniIdent('n'), new UniIntLiteral(2)), fiboReturn1, fiboReturn2);
    const fiboBlock = new UniBlock('fibo', [fiboIf]);
    const fiboFunc = new UniFunctionDec('fibo',[],'int',[new UniParam([],'int', [new UniVariableDef('n', null, '')])],fiboBlock);
    
    const aDec = new UniVariableDec(null,'int', [
      new UniVariableDef('a', new UniMethodCall(null,'fibo',[new UniIntLiteral(9)]),'')]);
    
    const returnStatement = new UniReturn(new UniIdent('a'));
    const mainBlock = new UniBlock('main', [aDec,  returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [fiboFunc, mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 34);
  });

  it(`int main(){int arr[5] = {1, 2, 3}};return arr[1];}`, () => {
    const arrDef = new UniVariableDef(
      'arr', new UniArray([new UniIntLiteral(1), new UniIntLiteral(2), new UniIntLiteral(3)]),'[5]');
    const arrDec = new UniVariableDec(null,'int', [arrDef]);
    
    const returnStatement = new UniReturn(new UniBinOp('[]',new UniIdent('arr'), new UniIntLiteral(1)));
    const mainBlock = new UniBlock('main', [arrDec, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock('global', [mainFunc]);
    const program = new UniProgram(globalBlock);
    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 2);
  });

});

describe('mapper', () => {
  // const cmapper = new CMapper();
  const cmapper = new CPP14Mapper();
  // cmapper.setIsDebugMode(true);

  it(`int main(){}`, () => {
    const mainBlock = new UniBlock(null, []);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock(null, [mainFunc]);
    const program = new UniProgram(globalBlock);

    const text = 'int main(){}';
    const tree = cmapper.parse(text);
    assert.isOk(tree.equals(program));
  });

  it(`int main(){return 0;}`, () => {
    const returnValue = new UniIntLiteral(0);
    const returnStatement = new UniReturn(returnValue);
    const mainBlock = new UniBlock(null, [returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock(null, [mainFunc]);
    const program = new UniProgram(globalBlock);

    const text = 'int main(){return 0;}';
    const tree = cmapper.parse(text);
    assert.isOk(tree.equals(program));

    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 0);
  });

  it(`int main(){int i=0; return i;}`, () => {
    const iEq0 = new UniVariableDef('i', new UniIntLiteral(0), null);
    const iDec = new UniVariableDec([], 'int', [iEq0]);
    
    const returnStatement = new UniReturn(new UniIdent('i'));
    const mainBlock = new UniBlock(null, [iDec, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock(null, [mainFunc]);
    const program = new UniProgram(globalBlock);
    
    const text = 'int main(){int i=0;return i;}';
    const tree = cmapper.parse(text);
    assert.isOk(tree.equals(program));

    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 0);
  });

  it(`int main(){int sum=0;for(int i=1;i<=10;++i){sum += i;}return sum;}`, () => {

    const sumEq0 = new UniVariableDef('sum', new UniIntLiteral(0),null);
    const sumDec = new UniVariableDec([],'int', [sumEq0]);

    const i = new UniVariableDef('i', new UniIntLiteral(1),null);
    const iDec = new UniVariableDec([],'int', [i]);
    const cond = new UniBinOp('<=', new UniIdent('i'), new UniIntLiteral(10));    
    const step = new UniUnaryOp('++_',new UniIdent('i'));
    
    const sumPlusI = new UniBinOp('+=', new UniIdent('sum'), new UniIdent('i')); 
    const forBlock = new UniBlock(null, [sumPlusI]);

    const forState = new UniFor(iDec, cond, step, forBlock);
    
    const sum = new UniIdent('sum');
    const returnStatement = new UniReturn(sum);
    const mainBlock = new UniBlock(null, [sumDec, forState, returnStatement]);
    const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
    const globalBlock = new UniBlock(null, [mainFunc]);
    const program = new UniProgram(globalBlock);

    const text = 'int main(){int sum=0;for(int i=1;i<=10;++i){sum += i;}return sum;}';
    const tree = cmapper.parse(text);
    assert.isOk(tree.equals(program));

    const engine = new Engine();
    const ret = engine.execute(program); 
    assert.equal(ret, 55);
  });
});
