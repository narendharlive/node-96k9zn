// Default parameters
let displayDefaultParms = (a: number = 0, b: number = 2) => a + b;

let defaultCall = (num1, num2) => {
    let num3 = (<HTMLInputElement>document.getElementById(num1)).value;
    let num4 = (<HTMLInputElement>document.getElementById(num2)).value;
    let output = document.getElementById('defaultOutput');
    let callOutput;
    if (num3 && num4) {
        callOutput = displayDefaultParms(Number(num3), Number(num4))
    } else if (num3) {
        callOutput = displayDefaultParms(Number(num3))
    } else {
        callOutput = displayDefaultParms();
    }
    output.innerHTML = String(callOutput);
}


// Template Literal
var tempLit = document.getElementById('tempLit');
tempLit.innerHTML = `Testing Santosh`;
let tempLiterals = (): void => {
    let temp: number = 10, add1: number = 28, add2: number = 30;
    document.getElementById('withNum').innerHTML = `Template with Number ${temp}`;
    document.getElementById('arthOpera').innerHTML = `Arithmetic Operation: ${add1 + add2}`;
}

tempLiterals();

//let and const differences

let constLetDiff = (): void => {
    document.getElementById('letconst').innerHTML = `<div>Dynamic html rendering with template literals </div>`;
    document.getElementById('letVar').innerHTML = `<div>Let Example: it's a block scope</div>`;
    if (true) {
        let one1 = 123;
        document.getElementById('output').innerHTML = `<div>Let Scope: ${one1}</div>`;
    }
    // console.log(one1) We can not access one1 out of the block

    document.getElementById('constVar').innerHTML = `<div>Const Example: it's a block scope and we can't change once assigned value</div>`
    if (true) {
        const canAssign = 'Testing Const';
        document.getElementById('constoutput').innerHTML = `<div>Const Output: ${canAssign}</div>`;
        //canAssign = 'Re Assign' not possible
    }
    // console.log(canAssign) //We can not access one1 out of the block
}

constLetDiff();

//Arrow functions 

// Default/ No parameters function

let displayArrow = (): string => `Default/ No parameters function`;

document.getElementById('defaultAw').innerHTML = displayArrow();

// Single parameters Arrow function

let singleArrow = param => param;

document.getElementById('singleAw').innerHTML = singleArrow(`Single Parameter: $${25.5}`);

// Multiple parameters Arrow function

let multiArrow = (param1: number, param2: number): number => param1 + param2;

document.getElementById('multiAw').innerHTML = String(`Output ${multiArrow(10, 29)}`); // innerHTML assign String only and calling method using Template literals


//For in vs of

let arr: Array<number> = [1, 3, 5, 9]
let forInOf = arr => {
    console.log(`For in:`);
    for (let index in arr) {
        let value = arr[index]
        console.log(`Displaying for in key: ${index} value: ${value}`);
    }
    console.log(`For of:`);
    for (let i of arr) {
        console.log(`Displaying for of key: ${i}`); // i contains directly value, we are using 'of'
    }
}

forInOf(arr);

// lambda function
let arrLength = arr => arr.length;

document.getElementById('lambdaOut').innerHTML = `Lambda output: ${arrLength(arr)}`;

//Spread operators with Array
console.log(`Spread operators with Array:`);
let arr1: Array<string> = ['San', 'to', 'sh']

let arr2: Array<number> = [1, 3, 5, 9]
let arr3: Array<number | string> = [...arr1, ...arr2]; // Here using | operator we can allow number and Strings into single array
console.log('Moving to other array', arr3);

console.log([1, 10, 'xyz', ...arr1, ...arr2]);

//Spread operators with Object
console.log(`Spread operators with Object:`);
let obj = {
    name: 'Santosh',
    age: '35',
}


let obj1 = {
    lastname: 'bujala',
    count: '10',
}
let obj3 = { ...obj, ...obj1 };
console.log(obj3);

console.log({ test: 'testing', ...obj, ...obj1 });

// Number of arguments
let numberOfArrgs = (...args) => {
    return args.filter(function (e) {
        console.log(e);
    });
}
console.log(`Number of arguments:`);
numberOfArrgs('Santosh', 'Manvith', 'Bujala');
numberOfArrgs('test', 'test1', 'test2', 'test3', 'test4', 'test5');
numberOfArrgs(1, 2, 3);

//Optional arguments
let optionalArgs = (a?: number | string, b?: number | string, c?: number | string) => {
    if (a && b && c)
        console.log(`a: ${a} b: ${b} c: ${c}`)
    else if (a && b)
        console.log(`a: ${a} b: ${b}`);
    else a? console.log(`a: ${a}`) :b ? console.log(`b: ${b}`) :console.log(`c: ${c}`);
}
console.log(`Optional arguments`);
optionalArgs(1);
optionalArgs(1,2);
optionalArgs(1,2,3);
optionalArgs(1,'Test',3); // We are passing mixed parameters using |


//Function destructuring

let destruct =()=> [10,20,80];

let [v1,v2, v3]= destruct();

console.log(`Function destructuring`);
console.log(v1);
console.log(v2);
console.log(v3);

let destructNargs =()=> [5,10,15,20,25];

let [a1, a2, ...a3]= destructNargs();
console.log(a1);
console.log(a2);
console.log(a3);
