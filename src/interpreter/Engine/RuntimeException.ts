export class RuntimeException implements Error {
  name = 'RuntimeException';
  message = '';

  constructor(message?: string) {
    if (message !== undefined) {
      this.message = message;
    }
  }

  toString() {
    return this.name + ': ' + this.message;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class UniRuntimeError extends RuntimeException {
  name = 'UniRuntimeError';
}
