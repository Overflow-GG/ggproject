angular
    .module("app-gg")
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            // HTML 5 mode
            $locationProvider.html5Mode(true);

            // Default route for URLs without an associated router
            $urlRouterProvider.otherwise("/home");

        }
    ]);
