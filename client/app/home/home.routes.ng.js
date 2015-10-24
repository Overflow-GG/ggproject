angular
    .module("app-gg")
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            $stateProvider
                .state('homeState', {
                    url: '/home',
                    templateUrl: 'client/app/home/home.view.ng.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                });

        }
    ]);
