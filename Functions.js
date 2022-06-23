// Non-primitive => array,objects,function

// fn def
//No need to give return type for both func and params
function sayHi(param){
    console.log("hello guys");
    console.log('param received',param);
    let r = Math.random()>0.5 ? True : 'less than 0.5';
    return r;
}

// fn call
sayHi("10");
sayHi('hellew');
sayHi([1,2,3,4,5]);
