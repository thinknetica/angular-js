angular.module('thSample').filter('feet', function(feetLength){
  var feetFilter = function(input, roundFloor) {
    var feets = input * feetLength.value;
    var roundedFeets = roundFloor ? Math.floor(feets) : Math.round(feets);
    return roundedFeets + " ft.";
  }

  feetFilter.$stateful = true;

  return feetFilter;
}).value('feetLength', {value: 3.28084})
