import { ANTLRErrorListener } from 'antlr4ts/ANTLRErrorListener';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { Recognizer } from 'antlr4ts/Recognizer';
import { SyntaxErrorData } from './SyntaxErrorData';

export class SyntaxErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  private errorMessages: SyntaxErrorData[] = [];
  syntaxError<T extends TSymbol>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
  ): void {
    this.errorMessages.push(new SyntaxErrorData(line, charPositionInLine, msg));
  }
  getErrorMessages = () => this.errorMessages.concat();
}
