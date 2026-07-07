// array

const myArr = [0, 1, 2, 3, 4, 5]

//console.log(myArr[3])
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//array method

// myArr.push(6)
// myArr.push(7) =>add element
// myArr.pop()   =>last element delete

//myArr.unshift(9) => starting mein add karega 
// myArr.shift() => starting se delete

//console.log(myArr.includes(7)); => ye value array mein h ya nhi uske liye 
//console.log(myArr.indexOf(9));

//const newArr = myArr.join => converts the array into String


//console.log(myArr)
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr);
console.log(myn2);

//slice mein vo array se value nikal ke deta h or range include nhi hoti 

//splice mein vo original array hi change kardeta h start index se deletecount element remove karta h 