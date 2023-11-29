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

//truthy & falsy value
let link =
    "https://itzone.com.vn/en/article/what-are-truthy-and-falsy-in-javascript/";

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

//sorting
arr.sort((a, b) => {
    return a - b;
}); //ascending

arr.sort((a, b) => {
    return b - a;
}); //descending

//set
let set = new Set(arr);
set.add(6);
set.delete(6);
set.has(6); //return boolean if set has 6
set.size; //return size of set

//map
let map = new Map();
map.set("5", "fasdfasd");
map.get("5"); //return fasdfasd
let hasInmap = map.has("5"); // true / false
