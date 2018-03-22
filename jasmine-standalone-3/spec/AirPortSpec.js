describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land', 'takeoff']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function() {
    airport.clearForTakeoff(plane);
    expect(airport.planes()).not.toEqual(plane);
  });

  it('airport can check for stormy condition', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  it('prevent plane to take off if the weather is stormy', function() {
    airport.stormyWeather = true;
    expect(function(){ airport.clearForTakeoff(plane)}).toThrowError('cannot takeoff during storm');
  });
});
