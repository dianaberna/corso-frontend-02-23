let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

let e = 0;

while (e <= array.length) {
  console.log(array[e]);
  e = e + 1;
}
e = 0;
sommaVettoreNumeri = 0;
while (e < array.length) {
  sommaVettoreNumeri = sommaVettoreNumeri + array[e];
  e++;
}
console.log("sommaVettoreNumeri =" + sommaVettoreNumeri);
