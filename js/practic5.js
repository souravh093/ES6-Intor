const array1 = [49, 92, 96, 88, 23, 34, 81, 77];
const array2 = [88, 55, 72, 13, 25, 92, 82, 19];

const combineMax = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const maxNumber = Math.max(...newArray);
    return maxNumber;
}

const callArray = combineMax(array1, array2);
console.log(callArray);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);