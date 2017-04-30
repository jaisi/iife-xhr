var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (showCarnivores) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        console.log("carnivore data is loaded");
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showCarnivores(carnivores);

      });

      loader.addEventListener("error", function () {
        console.log("File loading errored out")
      });

      loader.open("GET", "carnivores.json");
      loader.send();

    },
    loadHerbivores: function (showHerbivores) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        console.log("herbivore data is loaded");
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showHerbivores(herbivores);

      });

      loader.addEventListener("error", function () {
        console.log("File loading errored out")
      });
      
      loader.open("GET", "herbivores.json");
      loader.send();

    }

  }
})();





