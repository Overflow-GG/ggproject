angular
    .module("app-gg")
    .controller('ProductController', ProductController);

function ProductController($stateParams) {
    var vm = this;

    vm.productId = $stateParams.productId;

    ////////////

    // Implementation goes here
}
