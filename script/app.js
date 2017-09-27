var app = angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'mainCtrl'
  })
  .when('/portfolio', {
    templateUrl: 'portfolio.html',
    controller: 'portfolioCtrl'
  })
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'contactCtrl'
  })
  .when('/pricing', {
    templateUrl: 'pricing.html',
    controller: 'pricingCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})

.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/portfolio.json').then(function(response) {
    $scope.portfolio = response.data;
  });
  $http.get('json/testimonials.json').then(function(response) {
    $scope.testimonials = response.data;
  });

  $scope.imgBase = "img/portfolio/";
}])

.controller('portfolioCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/portfolio.json').then(function(response) {
    $scope.portfolio = response.data;
  });
  $scope.imgBase = "img/portfolio/";
}])

.controller('pricingCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/pricing.json').then(function(response) {
    $scope.pricing = response.data;
  });
}])

.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('navCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/navigation.json').then(function(response) {
    $scope.siteNav = response.data;
  });
}]);
