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
                .state('home', {
                    url: '/home',
                    templateUrl: 'client/app/home/home.view.ng.html',
                    controller: 'HomeController'
                });

            $urlRouterProvider.otherwise("/home");
        }
    ]);
