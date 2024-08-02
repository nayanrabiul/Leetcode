let str = "Bangladesh";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let c of str) {
    console.log(c);
}
for (let c in str) {
    console.log(c);
}

// let tree = {
//     a: "aa",
//     b: "bb",
//     c: "cc",
// };

for (let c in tree) {
    console.log(c);
}
