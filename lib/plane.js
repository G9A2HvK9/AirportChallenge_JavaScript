function Plane(){
  this.isFlying = true;
  this.weather = new Weather();
};

Plane.prototype.land = function(airport){
  airport._landPlane(this)
  this.isFlying = false
  return "Plane has successfully landed";
};

Plane.prototype.takeOff = function(airport){
  airport._releasePlane(this);
  this.isFlying = true;
  return "Plane has successfully taken off";
};
