let arrTest = [1, 2, , undefined, 3];
console.log("--------original arrTest--------");
console.log(arrTest);

console.log("--------forEach----------");

Array.prototype._forEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    //to filter out empty items in sparse arrays, but not undefined elements
    if (i in this) {
      func(this[i], i, this);
    }
  }
};

arrTest._forEach((v, i, a) => (a[i] = v + 1));
arrTest._forEach((v, i, a) => (a[i] = v + 1));
console.log(arrTest);

console.log("--------map---------");

Array.prototype._map = function (func) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArr.push(func(this[i], i, this));
    }
    //the book mentioned that we can use delete to create sparse arrays, but not saying how.
    //im just simply assigning anything to this index and then delete it. It works.
    else {
      newArr[i] = undefined;
      delete newArr[i];
    }
  }
  return newArr;
};

console.log(arrTest._map((v) => v + 10));

console.log("---------filter----------");

Array.prototype._filter = function (func) {
  const newArr = [];
  this._forEach((v, i) => {
    //no need to worry about keeping the sparse elements
    if (func(v, i)) {
      newArr.push(v);
    }
  });
  return newArr;
};

console.log(arrTest._filter((v) => v > 3));

console.log("---------find----------");
const arrFind = [1, 2, 3, 4];
Array.prototype._find = function (func) {
  // can't use the forEach method here coz we only need the 1st match.
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return this[i];
    }
  }
};

console.log(arrFind._find((v) => v > 11));

console.log("---------findIndex---------");
const arrFindIndex = [2, 3, 3, 3, 5];

Array.prototype._findIndex = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return i;
    }
  }
};

console.log(arrFindIndex._findIndex((v) => v === 3));

console.log("----------every----------");

const arrEvery = [1, 2, 3, 4, 5];

Array.prototype._every = function (func) {
  let bool = true;
  this._forEach((v) => {
    if (!func(v)) {
      bool = false;
    }
  });
  return bool;
};

console.log(arrEvery._every((v) => v > 2));

console.log("---------some----------");

Array.prototype._some = function (func) {
  let boolSome = false;
  this._forEach((v) => {
    if (func(v)) {
      boolSome = true;
    }
  });
  return boolSome;
};

console.log(arrEvery._some((v) => v > 2));

console.log("---------reduce---------");

const arrReduce = [2, 3, 4];

Array.prototype._reduce = function (func, initialValue) {
  let initVal = initialValue;
  let newIndex = 0;
  if (initialValue === undefined) {
    //since the 2nd argument is optional
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        initVal = this[i];
        newIndex = i;
        break;
      }
    }
  }
  for (let i = newIndex + 1; i < this.length; i++) {
    if (i in this) {
      initVal = func(initVal, this[i]);
    }
  }
  return initVal;
};

console.log(arrReduce._reduce((initVal, v) => initVal * v));

console.log("---------reduceRight----------");

const arrReduceRight = [,3,, 4, 5];

Array.prototype._reduceRight = function (func, initialValue) {
  let initVal = initialValue;
  let newIndex = this.length - 1;
  if (initialValue === undefined) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (i in this) {
        initVal = this[i];
        newIndex = i;
        break;
      }
    }
  }
  for (let i = newIndex - 1; i >= 0; i--) {
    if (i in this) {
      initVal = func(initVal, this[i]);
    }
  }
  return initVal;
};

console.log(arrReduceRight._reduceRight((initVal, v) => initVal * v));

console.log("----------flat----------");

const arrFlat = [1, 2, [3, 4, [5, [6, 7]], 8, 9]];

Array.prototype._flat = function (val) {
  if (val === undefined || val <= 0) {
    val = 1; //in case not specified or not positive, default to 1
  }
  let result = [];
  for (let i = 0; i < this.length; i++) { 
    if (Array.isArray(this[i]) && val > 0) {
      result = result.concat(this[i]._flat(val - 1));
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arrFlat._flat());

console.log("---------indexOf---------");

const arrIndexOf = [1, 2, 3, 4, 5];

Array.prototype._indexOf = function (target) { 
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i;
    }
  }
  return 'no such element'; //or delete this line and let it return undefined
};

console.log(arrIndexOf._indexOf(11));

console.log("---------lastIndexOf---------"); 

const arrLastIndexOf = [1, 2, 3, 4, 5];

Array.prototype._lastIndexOf = function (target) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === target) {
      return i;
    }
  }
};

console.log(arrLastIndexOf._lastIndexOf(11));

console.log("---------includes---------");

const arrIncludes = [1, 2,,3, 4, 5];

Array.prototype._includes = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return true;
    }
  }
  return false;
};

console.log(arrIncludes._includes()); //works for sparse arrays too

console.log("--------reverse---------");

const arrReverse = [1, 2, 3, 4, 5];

Array.prototype._reverse = function () {
  this._forEach((v, i, a) => {
    if (i < a.length / 2) { //when we are halfway through the array, it should be all done
      let temp = a[i];
      a[i] = a[a.length - 1 - i];
      a[a.length - 1 - i] = temp;
    }
  });
  return this;
};

console.log(arrReverse._reverse());