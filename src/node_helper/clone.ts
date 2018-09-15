// tslint:disable
export const clone = (function() {
  function createMemo() {
    return {
      Object: [],
      Array: [],
      Function: [],
      Error: [],
      Date: [],
      RegExp: [],
      Boolean: [],
      String: [],
      Number: [],
    };
  } // 循環参照対策のため、すべてオブジェクトをmemoに保存;
  let memo = createMemo(); // main関数 第一引数はcloneしたいobject 第二引数はcloneしたくないobjectのconstructorを配列で指定する;
  function clone(object, prototypes) {
    // プリミティブ型はそのまま返す;
    if (object === null || (typeof object !== 'object' && typeof object !== 'function')) {
      return object;
    } // cloneしたくないobjectであれば、参照で返す;
    if (typeOf(prototypes) === 'Array') {
      for (let i = 0, len = prototypes.length; i < len; i++) {
        if (Object.getPrototypeOf(object) === prototypes[i]) {
          return object;
        }
      }
    } // objectの型とcloneObjの型を同一にする;

    let cloneObj;
    const type = typeOf(object);
    switch (type) {
      case 'Object':
      case 'Error': // 自作クラスはprototype継承される
        cloneObj = Object.create(Object.getPrototypeOf(object));
        break;
      case 'Array':
        cloneObj = [];
        break;
      case 'Function': // ネイティブ関数オブジェクトはcloneできないので、そのまま参照で返す;
        try {
          eval('cloneObj = ' + object.toString());
        } catch (e) {
          return object;
        }
        break;
      case 'Date':
        cloneObj = new Date(object.valueOf());
        break;
      case 'RegExp':
        cloneObj = new RegExp(object.valueOf());
        break;
      case 'Boolean':
      case 'String':
      case 'Number':
        cloneObj = new Object(object.valueOf());
        break;
      default:
        // ここで列挙されていない型は対応していないので、参照で返す;
        return object;
    } // 循環参照対策 objectが既にmemoに保存されていれば内部参照なので、値渡しではなくcloneObjに参照先を切り替えたobjectを返す;
    for (let i = 0, len = memo[type].length; i < len; i++) {
      if (memo[type][i][0] === object) {
        return memo[type][i][1];
      }
    } // 循環参照対策 objectはcloneObjとセットでmemoに追加;
    memo[type].push([object, cloneObj]); // objectのすべてのプロパティを再帰的にcloneする;
    const properties = Object.getOwnPropertyNames(object);
    for (let i = 0, len = properties.length; i < len; i++) {
      const prop = properties[i];
      cloneObj[prop] = clone(object[prop], prototypes);
    } // cloneしたオブジェクトを返す;
    return cloneObj;
  }
  function typeOf(operand) {
    return Object.prototype.toString.call(operand).slice(8, -1);
  }
  return function(object: any, prototypes?: any) {
    memo = createMemo();
    return clone(object, prototypes);
  };
})();
