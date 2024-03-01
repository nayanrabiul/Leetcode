let functionb = (a) => {
    a = "world";
};

let functiona = () => {
    let array = "hello";
    functionb(array);
    console.log(array);
};

functiona();

// let a = 1;
// a = { a: 1 };
// a = "fasdfas";
// a = () => {};
// a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(typeof a);
