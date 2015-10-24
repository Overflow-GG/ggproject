angular
    .module("app-gg")
    .controller('ProductController', ProductController);

ProductController.$inject = ['$meteor', '$stateParams'];

function ProductController($meteor, $stateParams) {
    var vm = this;

    vm.product = $meteor.object(ProductsCollection, $stateParams.productId);

    ////////////

    // Implementation goes here
}
