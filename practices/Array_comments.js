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
      newArr[i] = func(this[i], i, this);
    }
    
    else {

      // FIXME - fixed, the above if statement is good enough to accept onlyy non-emmpty elements 
      // You're overthinking here
      // newArr.push(undefined);
      // newArr[i] = undefined;
      // delete newArr[i];
    }
  }
  return newArr;
};

console.log(arrTest._map(v => v + 10));

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

console.log(arrTest._filter(v => v > 3));

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

console.log(arrFind._find(v => v > 11));

console.log("---------findIndex---------");
const arrFindIndex = [2, 3, 3, 3, 5];

Array.prototype._findIndex = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return i;
    }
  }
};

console.log(arrFindIndex._findIndex(v => v === 3));

console.log("----------every----------");

const arrEvery = [1, 2, 3, 4, 5];

Array.prototype._every = function (func) {
  let bool = true;

  // FIXME - fixed. 
  // From the book:"The every() method is like the mathematical “for all” quantifier ∀"
  // for all means as long as 1 element is false, no need to continue.
  // then we can stop right away.
  // better to use a simple for loop with a break sincce foreach itrates all.
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) {
      bool = false;
      break;
    }
  }

  // How would you increase performance here?
  /* this._forEach((v) => {
    if (!func(v)) {
      bool = false;
    }
  });
  */
  return bool;
};

console.log(arrEvery._every((v) => v > 0));

console.log("---------some----------");

Array.prototype._some = function (func) {
  let boolSome = false;

  // FIXME - fixed
  // Same. How would you increase performance here?
  // same idea as above, we can jusust use a for loop and then break,
  // as long as we have 1 element is trye
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      boolSome = true;
      break;
    }
  }
  /* this._forEach((v) => {
    if (func(v)) {
      boolSome = true;
    }
  }); */
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

Array.prototype._flat = function (val = 1) {
  if (val === undefined || val < 1) {
    val = 0; 
    //myfix: i noticed a bug, it always flat all dimentions as it always set val to 1 if it's 0
  }
  let result = [];
  for (let i = 0; i < this.length; i++) { 
    if (Array.isArray(this[i]) && val > 0) {

      // FIXME - fixed
      // Exlain this line
      // in this method, this line is the key code that will call the _flat again 
      //and again until val becomes 0, whicg fails the if statement and stop flatting, 
      //then everything else will goes to the else statement beloe
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
  // FIXME
  // What regular indexOf supposed to return?
  // return 'no such element'; //or delete this line and let it return undefined
  // the regular indexof returns -1 when no match at all
  return -1;
};

console.log(arrIndexOf._indexOf(10));
console.log(arrIndexOf.indexOf(11));

console.log("---------lastIndexOf---------"); 

const arrLastIndexOf = [1, 2, 3, 4, 5];

Array.prototype._lastIndexOf = function (target) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === target) {
      return i;
    }
  }
  // FIXME
  // No default return value? Check what regular lastIndexOf returns
  // same as indexOf, it can return -1 when no match at all
  return -1;
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