angular.module('thSample').factory('Mount', function($resource){
  var self = {};

  function parseResults(data, headersGetter){
    data = angular.fromJson(data);
    return data.results;
  }

  var Mount = $resource(
    'https://api.parse.com/1/classes/Mount/:objectId',
    {objectId: '@objectId'},
    {query: {isArray: true, transformResponse: parseResults}}
  )

  return Mount;
});
