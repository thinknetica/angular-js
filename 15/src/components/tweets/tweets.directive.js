angular.module('thSample').directive('thTweets', function(){
  return {
    templateUrl: 'components/tweets/tweets.html',
    link: function(scope, iElement, iAttrs){
      scope.tweets = [];

      scope.$on('tweets.new', function(e, data){
        scope.$apply(function(){
          scope.tweets.unshift(data.tweet);
          if (scope.tweets.length > 5) scope.tweets.splice(5,1);
        });
      })
    }
  }
})
