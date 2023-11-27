// ......veriables...

const v = 5; //can't change
let v2 = 5;
var v3 = 5;

//......function......

let v4 = function () {
    //function body
};
let v5 = () => {
    //function body
};

//array
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(10).fill(0);

let length = arr.length;

//loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach((element) => {
    console.log(element);
});
