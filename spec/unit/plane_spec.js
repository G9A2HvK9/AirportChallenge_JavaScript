describe("Plane", function() {
  var Airport = require('../../src/airport');
  var Plane = require('../../src/plane');
  var Weather = require('../../src/weather');
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = new Plane
    airport = new Airport
  });

  it("initiates in flight", function(){
    expect(plane._inFlight).toBe(true);
  });

  it("changes to not in flight when landed at airport", function(){
    airport.weather = function(){return "Sunny"}
    airport.land(plane)
    expect(plane._inFlight).toBe(false)
  });
});
