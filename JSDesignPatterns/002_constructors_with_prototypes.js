function Car (model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles."
};

var saab = new Car("Saab", 1997, 20000);
var audi = new Car("Audi A3 FSI", 2004, 78000);

console.log(saab);
console.log(audi);