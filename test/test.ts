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
  // it(`UniIntLiteral`, () => {
  //   const uniIntLiteral = new UniIntLiteral(10);
  //   const uniIntLitera2 = new UniIntLiteral(20);
  //   const uniIntLitera3 = new UniIntLiteral(30);
  //   const ret = new UniBinOp('+', uniIntLiteral, uniIntLitera2);    
  //   assert.equal(uniIntLiteral.toString(), 'IntLiteral(10)');
  //   assert.isOk(uniIntLitera2.equals(uniIntLitera3));
  // });

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
});
