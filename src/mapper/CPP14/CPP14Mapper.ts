// tslint:disable
// tslint:disable
import { CPP14MapperBase } from './CPP14MapperBase';
export class CPP14Mapper extends CPP14MapperBase {
  // #defineを探してそれ以降の文中の文字列を単純に置換する
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
