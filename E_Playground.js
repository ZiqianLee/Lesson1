function outerFn(){
    let a = 1

    function innerFn(){
        console.log(a);
    }
    return innerFn;
}

let myFun = outerFn();

myFun();
myFun();