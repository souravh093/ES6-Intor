// function add(first, second) {
//     // console.log(first, second);
//     second = undefined || 0;
//     // if (second === undefined) {
//     //     second = 0;
//     // }
//     const result = first + second;
//     return result;
// }


function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}

const result = add();
console.log(result);