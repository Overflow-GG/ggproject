angular
    .module("app-gg")
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
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

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('productState', {
                    url: '/product/{productId}',
                    templateUrl: 'client/app/product/product.view.ng.html',
                    controller: 'ProductController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise("/home");
        }
    ]);
