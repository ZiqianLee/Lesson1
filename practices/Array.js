let arrTest = [1,2, , undefined, 3];

console.log('-------forEach----------');
function _forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (i in arr){  //to deal with sparse arrays, but not undefined elements
        func(arr[i]); //the 3 parameter positions are fixed. im just putting arr[i] here.
        }
    }
}
_forEach(arrTest, x => console.log(x)); 

console.log('--------map---------');
function _map(arr, func) {
    const newArr = [];
    _forEach(arr, function(element) {
        newArr.push(func(element)); //I think we only need element here
    });
    return newArr; //the map method has a return value
}

console.log(_map(arrTest, x => x + 1));

console.log('--------filter---------');
function _filter(arr, func) {
    const newArr = [];
    _forEach(arr, function(elem, i) {
        if (func(elem,i)) { //see the example from the book, we need both element and index
            newArr.push(elem);
        }
    });
    return newArr;
}
console.log(_filter(arrTest, x => x > 2));


