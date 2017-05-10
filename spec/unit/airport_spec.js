
describe("Airport", function(){

  var Airport = require('../../src/airport');
  var Plane = require('../../src/plane');
  var Weather = require('../../src/weather');
  var airport;
  var plane;
  var weather;

    beforeEach(function(){
      plane = new Plane
      plane2 = new Plane
      airport = new Airport
    });

    it("Throws an exception when trying to land in stormy weather", function(){
      plane._inFlight = true
      airport.weather = function(){return "Stormy"}
      expect(function(){airport.land(plane)}).toThrowError("You cannot land when it is stormy!");
    });

    it("throws an exception when landing at full airport", function(){
      airport.isFull = function(){return true}
      expect(function(){airport.land(plane)}).toThrowError("Sorry, this airport is already full!")
    });

    it("throws and exception when a plane is not in flight", function(){
      plane._inFlight = false
      expect(function(){airport.land(plane)}).toThrowError("Airplane is already grounded!")
    });

    it("lands a plane when airport is not full and weather is sunny", function(){
      airport.isFull = function(){return false}
      airport.weather = function(){return "Sunny"}
      airport.land(plane)
      expect(airport.planes.length).toBe(1)
      airport.land(plane2)
      expect(airport.planes.length).toBe(2)
    });

    it("Throws an exception when trying to take off in stormy weather", function(){
      plane._inFlight = false
      airport.planes = [plane, plane2]
      airport.weather = function(){return "Stormy"}
      expect(function(){airport.takeOff(plane)}).toThrowError("You cannot take off when it is stormy!");
    });

    it("throws an exception when taking off from empty airport", function(){
      plane._inFlight = false
      airport.isEmpty = function(){return true}
      expect(function(){airport.takeOff(plane)}).toThrowError("Sorry, this airport is completely empty!")
    });

    it("throws and exception when a plane is already in flight", function(){
      plane._inFlight = true
      expect(function(){airport.takeOff(plane)}).toThrowError("Airplane is already in flight!")
    });

    it("takes off a plane when airport is not full and weather is sunny", function(){
      plane._inFlight = false
      plane2._inFlight = false
      airport.planes = [plane, plane2]
      airport.weather = function(){return "Sunny"}
      expect(airport.planes.length).toBe(2)
      airport.takeOff(plane)
      airport.takeOff(plane2)
      expect(airport.planes.length).toBe(0)
    });

});
