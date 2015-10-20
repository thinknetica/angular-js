angular.module('thSample', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl: "list.html",
    controller: 'MountsController',
    publicAccess: true,
    resolve: {
      currentUser: function(){
        return {name: 'Alex'};
      }
    }
  })
  .when('/mount/:slug', {
    templateUrl: "item.html",
    controller: "MountController",
    publicAccess: false
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}).run(function($rootScope, $route, $location){
  $rootScope.$on("$locationChangeStart", function(event, next, current){

    var nextPath = $location.path();
    var nextRoute = $route.routes[nextPath] || $route.routes['/mount/:slug'];
    if (!nextRoute.publicAccess){
      alert('Необходима регистрация.')
      $location.path('/');
    }
  });
});

var allMounts = [
  {
    slug: 'matterhorn',
    alt: 4478,
    title: 'Матерхорн',
    desc: 'Вершина в Пеннинских Альпах, на границе Швейцарии, кантон Вале, и Италии, провинция Валле-д’Аоста. Высота вершины составляет 4478 метров над уровнем моря. Маттерхорн расположен между швейцарским горным курортом Церматт и итальянским Брёй-Червиния.'
  },
  {
    slug: 'montblanc',
    alt: 4810,
    title: 'Монблан',
    desc: 'Кристаллический массив, высота которого достигает 4810 м. Расположен в Западных Альпах, входящих в горную систему Альпы. Находится на границе Франции и Италии в районах Верхняя Савойя и Курмайор. Без учёта Эльбруса является высшей точкой Европы.'
  }
];
