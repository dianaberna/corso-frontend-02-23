let button = document.querySelector("button");
let input = document.querySelector("input");


button.addEventListener('click', () => {
    console.log(input.value);
    document.getElementById("quadrato").style=(input.value); 
})