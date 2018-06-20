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
import UniVariableDec from '../src/node/UniVariableDec';
import UniIdent from '../src/node/UniIdent';
import UniFor from '../src/node/UniFor';
import UniBinOp from '../src/node/UniBinOp';
import UniUnaryOp from '../src/node/UniUnaryOp';
import UniIntLiteral from '../src/node/UniIntLiteral';
import UniMethodCall from '../src/node/UniMethodCall';
import UniIf from '../src/node/UniIf';
import CMapper from '../src/mapper/C/CMapper';
import Engine from '../src/interpreter/Engine';
import CPP14Mapper from '../src/mapper/CPP14/CPP14Mapper';
import CPP14Engine from '../src/interpreter/CPP14Engine';

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
const testData = [
  {
    input: `int main(){}`,
    node:  () => {
      const mainBlock = new UniBlock(null, []);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: null,
  },
  {
    input: `int main(){return 0;}`,
    node:  () => {
      const returnValue = new UniIntLiteral(0);
      const returnStatement = new UniReturn(returnValue);
      const mainBlock = new UniBlock(null, [returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 0,
  },
  {
    input:  `int main(){int i=0; return i;}`,
    node: () => {
      const iEq0 = new UniVariableDef('i', new UniIntLiteral(0), null);
      const iDec = new UniVariableDec([], 'int', [iEq0]);
      
      const returnStatement = new UniReturn(new UniIdent('i'));
      const mainBlock = new UniBlock(null, [iDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 0,
  },
  {
    input: `int main(){int sum=0;for(int i=1;i<=10;++i){sum += i;}return sum;}`,
    node: () => {
      const sumEq0 = new UniVariableDef('sum', new UniIntLiteral(0),null);
      const sumDec = new UniVariableDec([],'int', [sumEq0]);
  
      const i = new UniVariableDef('i', new UniIntLiteral(1),null);
      const iDec = new UniVariableDec([],'int', [i]);
      const cond = new UniBinOp('<=', new UniIdent('i'), new UniIntLiteral(10));    
      const step = new UniUnaryOp('++',new UniIdent('i'));
      
      const sumPlusI = new UniBinOp('+=', new UniIdent('sum'), new UniIdent('i')); 
      const forBlock = new UniBlock(null, [sumPlusI]);
  
      const forState = new UniFor(iDec, cond, step, forBlock);
      
      const sum = new UniIdent('sum');
      const returnStatement = new UniReturn(sum);
      const mainBlock = new UniBlock(null, [sumDec, forState, returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 55,
  },
  {
    input: `int add(int x, int y){return x+y;} int main(){int a=2; int b=3; int c=add(a,b); return c;}`,
    node:  () => {
      const addReturn = new UniReturn(new UniBinOp('+',new UniIdent('x'),new UniIdent('y')));
      const addBlock = new UniBlock(null, [addReturn]);
      const addFunc = new UniFunctionDec('add',[],'int',[new UniParam([],'int', [new UniVariableDef('x', null, null)]), new UniParam([],'int', [new UniVariableDef('y', null, null)])],addBlock);
      
      const aDec = new UniVariableDec([],'int', [new UniVariableDef('a', new UniIntLiteral(2),null)]);
      const bDec = new UniVariableDec([],'int', [new UniVariableDef('b', new UniIntLiteral(3),null)]);
      const cDec = new UniVariableDec([],'int', [new UniVariableDef('c', new UniMethodCall(null,new UniIdent('add'),[new UniIdent('a'),new UniIdent('b')]),null)]);
      
      const returnStatement = new UniReturn(new UniIdent('c'));
      const mainBlock = new UniBlock(null, [aDec, bDec, cDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [addFunc, mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 5,
  },
  {
    input: `int main(){int i=1; {int i=100; i+=20;} i+=50; return i;}`,
    node:() => {
      const iEq1 = new UniVariableDef('i', new UniIntLiteral(1),null);
      const iDec = new UniVariableDec([],'int', [iEq1]);
  
      const i = new UniVariableDef('i', new UniIntLiteral(100),null);
      const iInBlockDec = new UniVariableDec([],'int', [i]);
      const iPlus20 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(20)); 
      const forBlock = new UniBlock(null, [iInBlockDec, iPlus20]);
  
      const iPlus50 = new UniBinOp('+=', new UniIdent('i'), new UniIntLiteral(50)); 
  
      const returnStatement = new UniReturn(new UniIdent('i'));
      const mainBlock = new UniBlock(null, [iDec, forBlock, iPlus50, returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 51,
  },
  {
    input: `int fibo(int n){if(n<2) return n; else return fibo(n-1) + fibo(n-2);} int main(){int a = fibo(9);return a;}`,
    node:() => {
      const fiboReturn1 = new UniReturn(new UniIdent('n'));
      const fiboReturn2 = new UniReturn(new UniBinOp(
        '+', new UniMethodCall(null,new UniIdent('fibo'),[new UniBinOp('-',new UniIdent('n'), new UniIntLiteral(1))]), 
        new UniMethodCall(null,new UniIdent('fibo'),[new UniBinOp('-',new UniIdent('n'), new UniIntLiteral(2))])));
      const fiboIf = new UniIf(new UniBinOp('<',new UniIdent('n'), new UniIntLiteral(2)), fiboReturn1, fiboReturn2);
      const fiboBlock = new UniBlock(null, [fiboIf]);
      const fiboFunc = new UniFunctionDec('fibo',[],'int',[new UniParam([],'int', [new UniVariableDef('n', null, null)])],fiboBlock);
      
      const aDec = new UniVariableDec([],'int', [
        new UniVariableDef('a', new UniMethodCall(null,new UniIdent('fibo'),[new UniIntLiteral(9)]),null)]);
      
      const returnStatement = new UniReturn(new UniIdent('a'));
      const mainBlock = new UniBlock(null, [aDec,  returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [fiboFunc, mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 34,
  },
  {
    input: `int main(){int arr[5] = {1, 2, 3};return arr[1];}`,
    node:() => {
      const arrDef = new UniVariableDef(
        'arr', new UniArray([new UniIntLiteral(1), new UniIntLiteral(2), new UniIntLiteral(3)]),'[5]');
      const arrDec = new UniVariableDec([],'int', [arrDef]);
      
      const returnStatement = new UniReturn(new UniBinOp('[]',new UniIdent('arr'), new UniIntLiteral(1)));
      const mainBlock = new UniBlock(null, [arrDec, returnStatement]);
      const mainFunc = new UniFunctionDec('main',[],'int',[],mainBlock);
      const globalBlock = new UniBlock(null, [mainFunc]);
      const program = new UniProgram(globalBlock);
      return program;
    },
    ret: 2,
  },
  {
    input: `int main(){int x = abs(-3);return x;}`,
    node: null,
    ret: 3,
  },
  {
    input: `int main()
    {
      double x = 1.0;
      double e = 0.0000000005;
      int i;
      for(i=0;e<fabs(x*x-2);++i)
      {
        x -= ((x*x)-2) / (2*x);
      }
    
      return x;
    }`,
    node: null,
    ret: 1.4142135623746899,
  },
  {
    input: `int main()
    {
      int x = fmin(2,3);
      int y = printf("%u\\n",-12345);
      return x+y;
    }`,
    node: null,
    ret: 13,// "4294954951\n" + 2
  },
];

describe('node exec', () => {
  for (const test of testData) {
    if (test.node == null) {
      continue;
    }
    it(test.input, () => {
      const node = test.node();
      const engine = new CPP14Engine();
      engine.setDebugMode(false);
      const ret = engine.execute(node); 
      assert.equal(ret, test.ret);
    });
  }
});

describe('mapper', () => {
  for (const test of testData) {
    const cmapper = new CPP14Mapper();
    const text = test.input;
    const tree = cmapper.parse(text);
    if (test.node != null) {
      it(test.input + ' node', () => {
        const node = test.node();
        assert.isOk(tree.equals(node));
      });
    }
    it(test.input + ' exec', () => {
      const engine = new CPP14Engine();
      const ret = engine.execute(tree); 
      assert.equal(ret, test.ret);
    });
  }
});
