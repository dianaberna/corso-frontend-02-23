//let requestURL = "/vitale-cangiano/script.json";
let requestURL = "https://jsonplaceholder.typicode.com/posts";

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    const classe = request.response;
    console.log(classe);
}

// esercizio 18 calcola la somma del budget
    budgetTotale=[
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ];
    function sumBudget(budgetTotale){
        let sum =0;
        for (let value of budgetTotale){
            sum = value.budget+sum;
        }
        return sum;
    }
    console.log("la somma dei budget e = "+ sumBudget(budgetTotale));
    

