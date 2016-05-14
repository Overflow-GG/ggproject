angular
  .module("app-gg")
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {

      $stateProvider
        .state('profileState', {
          url: '/profile/{userId}',
          templateUrl: 'client/app/profile/profile.view.ng.html',
          controller: 'ProfileController',
          controllerAs: 'vm'
        });

    }
  ]);
