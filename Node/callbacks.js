let x = function(){
    console.log("i am called from inside a function")
};

let y = function(callback){
    console.log('do something');
    callback();
};

// One way
/* 
let calc = function(num1, num2, calcType){
    if (calcType === "add"){
        return num1 + num2;
    } else if (calcType === "multiply"){
        return num1 * num2;
    }
};
*/

// Other way, now the callback is very useful
let add = function(a, b){
    return a + b;
}

let multiply = function(a, b){
    return a * b;
}

let doWhatever = function(a, b){
    console.log(`Here are your two numbers back ${a}, ${b}`);
}

let calc = function(num1, num2, callback){
    if (typeof callback === "function"){
        return callback(num1, num2);
    } else{
        return "Bad";
    }
}

let myArr = [{
    num: 5,
    str: 'apple'
}, {
    num: 7,
    str: 'cabbage'
}, {
    num: 1,
    str: 'ban'
}];


myArr.sort(function(val1, val2){
    if (val1.str > val2.str){
        return -1;
    } else {
        return 1;
    }
});


// y(x);
// console.log(calc(2, 3, function(a, b){
//     return a - b 
// }));
console.log(myArr);