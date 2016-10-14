'use strict';

describe('Controller: CalebCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var CalebCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalebCtrl = $controller('CalebCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalebCtrl.awesomeThings.length).toBe(3);
  });
});
