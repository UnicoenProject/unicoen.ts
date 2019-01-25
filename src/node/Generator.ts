// tslint:disable:object-literal-sort-keys
import Node from './Node';
export default class Generator {
  static generate() {
    const node = new Node({
      className: 'Node',
      isAbstract: true,
      members: [['comments', 'string[]'], ['codeRange', 'CodeRange']],
      children: [
        new Node({
          className: 'Program',
          members: [['block', 'Block']],
        }),
        new Node({
          className: 'Expr',
          isAbstract: true,
          children: [
            new Node({
              className: 'NumberLiteral',
              members: [
                ['value', 'any'],
                ['signed', 'boolean'],
                ['bytes', 'number'],
                ['isFloat', 'boolean'],
                ['type', 'string'],
                ['prefix', 'string'],
                ['sufix', 'string'],
              ],
              children: [
                new Node({
                  className: 'IntLiteral',
                  members: [['value', 'number']],
                }),
                new Node({
                  className: 'DoubleLiteral',
                  members: [['value', 'number']],
                }),
                new Node({
                  className: 'CharacterLiteral',
                  members: [['value', 'string']],
                }),
              ],
            }),
            new Node({
              className: 'StringLiteral',
              members: [['value', 'string']],
            }),
            new Node({
              className: 'BoolLiteral',
              members: [['value', 'boolean']],
            }),
            new Node({
              className: 'NoneLiteral',
              members: [['value', 'string']],
            }),
            new Node({
              className: 'Cast',
              members: [['type', 'string'], ['value', 'Expr']],
            }),
            new Node({
              className: 'Ident',
              members: [['name', 'string']],
            }),
            new Node({
              className: 'Array',
              members: [['items', 'Expr[]']],
            }),
            // new Node({ className :`FieldAccess`,
            //   members:[
            //   [`receiver`, `Expr`],
            //   [`fieldName`, `string`],
            //   [`index`, `Expr`],
            //   ]}),
            new Node({
              className: 'MethodCall',
              members: [['receiver', 'Expr'], ['methodName', 'Ident'], ['args', 'Expr[]']],
            }),
            new Node({
              className: 'UnaryOp',
              members: [['operator', 'string'], ['expr', 'Expr']],
            }),
            new Node({
              className: 'BinOp',
              members: [['operator', 'string'], ['left', 'Expr'], ['right', 'Expr']],
            }),
            new Node({
              className: 'TernaryOp',
              members: [['cond', 'Expr'], ['trueExpr', 'Expr'], ['falseExpr', 'Expr']],
            }),
            new Node({
              className: 'New',
              members: [['type', 'string'], ['args', 'Expr[]']],
            }),
            new Node({
              className: 'NewArray',
              members: [['type', 'string'], ['elementsNum', 'Expr[]'], ['value', 'Array']],
            }),
            new Node({
              className: 'Statement',
              isAbstract: true,
              children: [
                new Node({ className: 'Break' }),
                new Node({ className: 'Continue' }),
                new Node({ className: 'EmptyStatement' }),
                new Node({
                  className: 'Return',
                  members: [['value', 'Expr']],
                }),
                new Node({
                  className: 'Jump',
                  members: [['dest', 'string']],
                }),
                new Node({
                  className: 'Label',
                  members: [['name', 'string']],
                }),
                new Node({
                  className: 'Block',
                  members: [['blockLabel', 'string'], ['body', 'Statement[]']],
                }),
                new Node({
                  className: 'If',
                  members: [
                    ['cond', 'Expr'],
                    ['trueStatement', 'Statement'],
                    ['falseStatement', 'Statement'],
                  ],
                }),
                new Node({
                  className: 'For',
                  members: [
                    ['init', 'Expr'],
                    ['cond', 'Expr'],
                    ['step', 'Expr'],
                    ['statement', 'Statement'],
                  ],
                }),
                new Node({
                  className: 'EnhancedFor',
                  members: [
                    ['modifiers', 'string[]'],
                    ['type', 'string'],
                    ['name', 'Ident'],
                    ['container', 'Expr'],
                    ['statement', 'Statement'],
                  ],
                }),
                new Node({
                  className: 'While',
                  members: [['cond', 'Expr'], ['statement', 'Statement']],
                  children: [new Node({ className: 'DoWhile' })],
                }),
                new Node({
                  className: 'Switch',
                  members: [['cond', 'Expr'], ['cases', 'SwitchUnit[]']],
                }),
                new Node({
                  className: 'SwitchUnit',
                  members: [['label', 'string'], ['cond', 'Expr'], ['statement', 'Expr[]']],
                }),
              ],
            }),
            new Node({
              className: 'Decralation',
              isAbstract: true,
              children: [
                new Node({
                  className: 'ClassDec',
                  members: [
                    ['className', 'string'],
                    ['modifiers', 'string[]'],
                    ['members', 'Decralation[]'],
                    ['superClass', 'string[]'],
                    ['interfaces', 'string[]'],
                  ],
                }),
                new Node({
                  className: 'FunctionDec',
                  members: [
                    ['name', 'string'],
                    ['modifiers', 'string[]'],
                    ['returnType', 'string'],
                    ['params', 'Param[]'],
                    ['block', 'Block'],
                  ],
                }),
                new Node({
                  className: 'VariableDef',
                  members: [['name', 'string'], ['value', 'Expr'], ['typeSuffix', 'string']],
                }),
                new Node({
                  className: 'VariableDec',
                  members: [
                    ['modifiers', 'string[]'],
                    ['type', 'string'],
                    ['variables', 'VariableDef[]'],
                  ],
                  children: [new Node({ className: 'Param' })],
                }),
                new Node({
                  className: 'ImportDec',
                  members: [['name', 'string'], ['ondemand', 'string']],
                }),
              ],
            }),
          ],
        }),
      ],
    });
    node.write();
  }
}
Generator.generate();
