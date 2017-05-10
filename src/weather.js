function Weather(){
  this._condition = ["Stormy", "Sunny", "Stormy", "Sunny", "Sunny", "Stormy", "Sunny", "Sunny", "Sunny", "Stormy", "Sunny"]
};

Weather.prototype.condition = function () {
  this._selector = parseInt((Math.random()*10).toFixed(0))
  return this._condition[this._selector]
};

module.exports = Weather;
