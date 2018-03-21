function Airport() {
  this._hangar = [];
  };

  Airport.prototype.planes = function() {
    console.log(this._hangar)
    return this._hangar;
  };

  Airport.prototype.clearForLanding = function(plane) {
    this._hangar.push(plane);
  };
