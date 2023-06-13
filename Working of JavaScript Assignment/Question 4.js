function myFunc(){
    console.log(myLet)  //throws error 
    let myLet = 10;
    console.log(myLet)   //10

    console.log(myVar)  // undefined
    var myVar = 20;
    console.log(myVar)  // 20

    console.log(myConst)  // throws error
    const myConst = 30;
    console.log(myConst)   //  30

}

myFunc();