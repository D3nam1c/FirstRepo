console.log('works')

// function myFullName(name, nickname, lastname) {
//     if(nickname === undefined) {
//         return `${name} ${lastname}`;
    
// }

// return `${name} ${nickname} ${lastname}`;

// }

console.log('Dejan', undefined, 'Andovski')


const myFullname =  (name, nickname, lastname ) => `${name} ${nickname} ${lastname}`;


// let sum = (a) => a = 0;

const sumto =  num => {
    let sum = 0;
    for(let i = 0; i<= num; i++){
        sum += i
    }
    return sum;
}

console.log(sumto(10));









