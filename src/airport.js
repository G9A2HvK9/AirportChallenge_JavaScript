// Airport = new Object(weather, capacity)

// As an air traffic controller
// So I can decide whether a plane should land
// I want to keep track of how many planes are at my airport

var Weather = require('./weather');


function Airport(capacity) {
  this.planes = [];
  this.capacity = capacity
};

Airport.prototype.weather = function(){
  weather = new Weather();
  return weather.condition();
};

Airport.prototype.isFull = function(){
  return this.planes.length >= this.capacity
};

Airport.prototype.isEmpty = function(){
  return this.planes.length <= 0
};


Airport.prototype.land = function(plane){ // Depends on isFull, plane._inFlight and weather

  if (plane._inFlight == false){
    throw new TypeError("Airplane is already grounded!")
  }
  else if (this.isFull()){
    throw new TypeError("Sorry, this airport is already full!")
  }
  else if(this.weather() === "Stormy"){
    throw new TypeError("You cannot land when it is stormy!")
  }
  else {
    this.planes.push(plane)
    plane._inFlight = false
    return "Plane landed succesfully"
  };
};

Airport.prototype.takeOff = function(plane){ //depends on isEmpty, plane._inFlight and weather

  if (plane._inFlight == true){
    throw new TypeError("Airplane is already in flight!")
  }
  else if (this.isEmpty()){
    throw new TypeError("Sorry, this airport is completely empty!")
  }
  else if(this.weather() === "Stormy"){
    throw new TypeError("You cannot take off when it is stormy!")
  }
  else {
    var item = this.planes.indexOf(plane)
    this.planes.splice(item, 1)
    plane._inFlight = true
    return "Plane took off succesfully"
  };
};

module.exports = Airport;
