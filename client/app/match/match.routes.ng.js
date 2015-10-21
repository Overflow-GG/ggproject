angular
    .module("app-gg")
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireUser promise is rejected
            // and redirect the user back to the main page
            if (error === 'AUTH_REQUIRED') {
                $state.go('home');
            }
        });
    }]);

angular
    .module("app-gg")
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('match', {
                    url: '/match/{matchId}',
                    templateUrl: 'client/app/match/match.view.ng.html',
                    controller: 'MatchController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise("/home");
        }
    ]);
