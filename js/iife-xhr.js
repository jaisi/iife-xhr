
function showCarnivores (carnivores) {
	output=document.getElementById("output");
	for (i in carnivores)
	output.innerHTML += carnivores[i]+" ";
  
}

function showHerbivores (herbivores) {
	output=document.getElementById("output");
	for (i in herbivores)
	output.innerHTML += herbivores[i]+" ";

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);