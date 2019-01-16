

// // //a function that goes to the callback parameter
// // function sum(num1, num2) {
// //     return num1 + num2;
// // }
// // //a function that goes to the callback parameter
// // function multiply(num1, num2) {
// //     return num1 * num2;
// // }
// // //the function that you call the callback parameter in.
// // function calculate(a, b, callback) {
// //     let result = callback(a, b);
// //     return result;
// // }

// // calculate(2, 3, sum)
// // calculate(5, 4, multiply)



// // function name(name,surname){
// //     return 
// // }

// // function nameCaller(name, surname, callback) {
// //     let result =  callback(name, surname)

// // }

// // //pure function 

// // function increaseByOne(numbers) {
// //     let result = []
// //     for(let i = 0; i < numbers.length; i++) {
// //         result.push(numbers[i] + 1)
// //     }
// //     return result
// // }

// //exersises 
// //pure function

// console.log('Its good')

// let lastnames = ['Petrov', 'Sulejmanov', 'Cavkov', 'Donev', 'Mitev', 'Artemanov']


// const addSki = arr => {
//     let result = [];
//     arr.forEach(ln => result.push(`${ln}ski`))
//     return result
// }

// console.log(addSki(lastnames));


// // function fac(num) {
// //     if(num === 0) {
// //         return 0
// //     }
// //     return num * fac(num - 1)
// // }

// // const factoriel = num => num === 1 ? 1 : num * factoriel(--num);

// // console.log(factoriel(5)); // factoriel for a number.


// // const outer = (a) => {
// //     const inner = b => {
// //         return a + b;
// //     }
// //      return inner;
// // }

// // let sumWithFive = outer(5);

// // console.log(sumWithFive(5)); //closer function

// ((a) => {
//     return b => {
//         return a + b
//     }
// }
// )(5)(11)

// //tree form 

let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];

const makeTree = (categories, parent) => {
    let node = {};
    categories.filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node;
}

console.log(categories.filter(el => el.parent !== 'dogs'))

console.log(makeTree(categories, null));

//set by categories.
    
