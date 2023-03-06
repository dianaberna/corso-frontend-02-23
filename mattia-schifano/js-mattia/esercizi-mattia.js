let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("ciao mondo")
// 1
console.log("1")
console.log("con while")
let i = 0;
while(i <= array.length){
    console.log(array [+i]);
    i++ 
}

//2

i= 0;
let arraySum = 0;
while(i<= array.length -1){
    arraySum= arraySum + array[i];
    i++
}
console.log("arraySum="+arraySum)