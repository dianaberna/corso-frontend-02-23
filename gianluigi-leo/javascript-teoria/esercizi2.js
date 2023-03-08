let es_array1 = [1, 2, 2, 3, 4];
let es_array2 = [4, 2, 2, 4];

console.log("------- 16) --------------");
for(let i = 0; i < es_array2.length; i++){
    es_array2[i] = es_array2[i] / es_array1[es_array1.length -1 -i];
}
console.log(es_array2);