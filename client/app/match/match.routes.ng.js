angular
  .module("app-gg")
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState,
      fromParams, error) {
      // We can catch the error thrown when the $requireUser promise is rejected
      // and redirect the user back to the main page
      if (error === 'AUTH_REQUIRED') {
        $state.go('homeState');
      }
    });
  }]);

angular
  .module("app-gg")
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {

      $stateProvider
        .state('matchState', {
          url: '/match/{gameId}',
          templateUrl: 'client/app/match/match.view.ng.html',
          controller: 'MatchController',
          controllerAs: 'vm',
          resolve: {
            "currentUser": function($auth) {
              return $auth.requireUser();
            }
          }
        });

    }
  ]);
