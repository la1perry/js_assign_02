
let myArr = [2,4,6,8];
let myVal=process.argv;

let add=function(arr, val) {
    return arr.concat(Number(myVal[2]));
};

let newArr= add(myArr);

console.log(newArr);

