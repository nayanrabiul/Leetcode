// let functionb = (a) => {
//     a = "world";
// };

// let functiona = () => {
//     let array = "hello";
//     functionb(array);
//     console.log(array);
// };

// functiona();

let a = 5;
let b = a;
b = 6;
console.log(a);

let man = { name: "John", age: 25 };
let z = man;
z.name = "karim";
z.age = 30;
console.log(man); // { name: 'karim', age: 30} / { name: 'John', age: 25}
