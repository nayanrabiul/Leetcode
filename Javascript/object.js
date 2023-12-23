//creation
let myObject = {
    key1: 4,
    key2: "hi",
    key3: {
        key4: 5,
    },
};

let myObject2 = new Object();
myObject2.key1 = 4;
myObject2.key2 = "hi";
myObject2.key3 = {
    key4: 5,
};

//access
console.log(myObject.key1);
console.log(myObject["key1"]);
console.log(myObject.key3.key4);
console.log(myObject["key3"]["key4"]);

//update
myObject.key1 = 5;
myObject["key1"] = 5;
console.log(myObject.key1);

//delete
delete myObject.key1;

//object properties
console.log(Object.keys(myObject)); //["key2", "key3"]
console.log(Object.values(myObject)); //["hi", {key4: 5}]
console.log(Object.entries(myObject)); //[["key2", "hi"], ["key3", {key4: 5}]]

//check if property exists
console.log(myObject.hasOwnProperty("key1")); //false

//json
let myJson = JSON.stringify(myObject);
console.log(myJson); //{"key2":"hi","key3":{"key4":5}}
console.log(JSON.parse(myJson)); //{key2: "hi", key3: {…}}

//loop through object
for (let key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}
