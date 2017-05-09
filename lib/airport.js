// Airport = new Object(weather, capacity)

function Airport() {
  this.planes = [];
};

Airport.prototype._landPlane = function(plane){
  this.planes.push(plane);
};

Airport.prototype._releasePlane = function(plane){
  this.planes.pop();
};
