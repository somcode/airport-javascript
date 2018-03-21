describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function() {
    console.log(airport)
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    console.log(airport)
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
