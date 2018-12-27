import { Interpreter } from '../Interpreter';
import { CPP14Engine } from './CPP14Engine';
import { CPP14Mapper } from './CPP14Mapper';

export class CPP14Interpreter extends Interpreter {
  constructor() {
    super(new CPP14Engine(), new CPP14Mapper());
  }
  preProcess(text: string): string {
    const replaceMap = new Map<string, string>();
    for (let pos = text.indexOf('#define'); 0 <= pos; pos = text.indexOf('#define', pos)) {
      const lineEnd = text.indexOf('\n', pos);
      const defineText = text.substring(pos, lineEnd);
      const defineTokens = defineText.split(/\s+/);
      if (defineTokens.length < 3) {
        continue;
      }
      replaceMap.set(defineTokens[1], defineTokens.slice(2).join(' '));
      pos = lineEnd;
    }
    for (const [key, value] of replaceMap) {
      text = text.split(key).join(value);
    }
    return text;
  }
}
