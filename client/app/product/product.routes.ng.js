angular
    .module("app-gg")
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            $stateProvider
                .state('productState', {
                    url: '/product/{productId}',
                    templateUrl: 'client/app/product/product.view.ng.html',
                    controller: 'ProductController',
                    controllerAs: 'vm'
                });

        }
    ]);
