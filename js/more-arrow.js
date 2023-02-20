const add = (first, second) => first + second;

const getFullName = (first, last)  => first + ' ' + last;
const multiply = (first, last) => first * last;

const result = multiply(6, 9);

// no parameter arrow function
const getPi = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;
// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if your are return something, use the return statement 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = x + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
console.log(doMath(5, 5, 7));

const myArrowFunction = num => num;

console.log(myArrowFunction(2));



let me = {
    name: "Doe",
    thisInArrow:  () =>  {
        console.log('My name is ' + this.name);
    }
}

me.thisInArrow();

let main = {
    name: "Doe",
    thisInRegular() {
        console.log("My name is " + this.name);
    }
};

main.thisInRegular();