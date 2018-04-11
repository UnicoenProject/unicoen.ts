import CodeLocation from './node_helper/CodeLocation';
import CodeRange from './node_helper/CodeRange';
import UniNode from './node/UniNode';
import UniParam from './node/UniParam';
import UniExpr from './node/UniExpr';
import UniArray from './node/UniArray';
import UniNumberLiteral from './node/UniNumberLiteral';
import UniBinOp from './node/UniBinOp';
import UniBlock from './node/UniBlock';
import UniBoolLiteral from './node/UniBoolLiteral';
import UniBreak from './node/UniBreak';
import UniCast from './node/UniCast';
import UniContinue from './node/UniContinue';
import UniDoWhile from './node/UniDoWhile';
import UniEmptyStatement from './node/UniEmptyStatement';
import UniFor from './node/UniFor';
import UniIdent from './node/UniIdent';
import UniIf from './node/UniIf';
import UniWhile from './node/UniWhile';
import UniUnaryOp from './node/UniUnaryOp';
import UniTernaryOp from './node/UniTernaryOp';
import UniStringLiteral from './node/UniStringLiteral';
import UniReturn from './node/UniReturn';
import UniVariableDec from './node/UniVariableDec';
import UniSwitchUnit from './node/UniSwitchUnit';
import UniSwitch from './node/UniSwitch';
import UniMethodCall from './node/UniMethodCall';
import UniProgram from './node/UniProgram';
import Engine, { ControlException } from './interpreter/Engine';
import UniVariableDef from './node/UniVariableDef';
import UniFunctionDec from './node/UniFunctionDec';
import UniIntLiteral from './node/UniIntLiteral';
import { assert } from 'chai';

export default {
  CodeLocation,
  CodeRange,
  UniNode,
  UniParam,
  UniExpr,
  UniArray,
  UniNumberLiteral,
  UniBinOp,
  UniBlock,
  UniBoolLiteral,
  UniBreak,
  UniCast,
  UniContinue,
  UniDoWhile,
  UniEmptyStatement,
  UniFunctionDec,
  UniFor,
  UniIdent,
  UniIf,
  UniMethodCall,
  UniProgram,
  UniReturn,
  UniStringLiteral,
  UniSwitch,
  UniSwitchUnit,
  UniTernaryOp,
  UniUnaryOp,
  UniVariableDec,
  UniWhile,
  Engine,
};

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
