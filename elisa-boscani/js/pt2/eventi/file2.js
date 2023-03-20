console.log("file2")
alert("sono in file2")

window.addEventListener("load", function () {
	console.log("il body è stato caricato");
    document.getElementById("paragrafo").style.backgroundColor = "blue"
    alert("sono in file2 dentro l'event listener")
}) 
