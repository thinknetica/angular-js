angular.module('thSample').factory('TweetsFactory', function($rootScope){
  var self = {};
  var tweets = [
    {body: "We've done it again! Lovely little collection of #mountaineer volumes in next week, coinciding with @kendalmountain Viewing Saturday 10-3", user: 'alex'},
    {body: "Cool intersection of interests in NYT T Magazine today: #mountaineer @ReinholdMessner explores six museums in #Italy http://nyti.ms/1N4SDTo ", user: 'rolf'},
    {body: "Little man is excited for high five from his favorite #mountaineer @rd13_era I thought I was taking pictures.. Section 107 will be rocking", user: 'robert'},
    {body: "My fingers are crying out for some pocket pulling! 😭😭 Getting itchy for 🇪🇸 #rockclimbing #climbing… https://instagram.com/p/-PmAr4K5W-/", user: 'tobias'},
    {body: "Junior Rock Club Level 1: how to put on a harness, tie into a rope & belay safely & more. #learning #climbing", user: 'az_sulim'},
    {body: "So proud of my little 4 year old Lena, for #climbing her first real rock wall today. Like Daddy, like daughter.", user: 'mike'},
    {body: "Hanging off the edge halfway up the mountain. First multi pitch conquered. #climbing #hiking… https://instagram.com/p/-QQCjcx5OT/ ", user: 'arnie'},
    {body: "Joshua Suson in La Filthy Gringa 7c+/5.13a, Cebu, Philippines. Travel our #climbing world-> http://bit.ly/Explore_iloooveit … ", user: 'bill_kill'}
  ];

  self.init = function(){
    setInterval(function(){
      var randomTimeout = Math.floor(Math.random() * 5000);
      setTimeout(function(){
        var sampleIndex = Math.floor(Math.random() * tweets.length);
        $rootScope.$broadcast('tweets.new', {tweet: tweets[sampleIndex]})
      }, randomTimeout)
    }, 1000)
  }

  return self;
});
