import { Interpreter } from '../Interpreter';
import { Python3Engine } from './Python3Engine';
import { Python3Mapper } from './Python3Mapper';

export class Python3Interpreter extends Interpreter {
  constructor() {
    super(new Python3Engine(), new Python3Mapper());
  }
}
