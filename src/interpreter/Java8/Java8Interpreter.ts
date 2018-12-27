import { Interpreter } from '../Interpreter';
import { Java8Engine } from './Java8Engine';
import { Java8Mapper } from './Java8Mapper';

export class Java8Interpreter extends Interpreter {
  constructor() {
    super(new Java8Engine(), new Java8Mapper());
  }
}
