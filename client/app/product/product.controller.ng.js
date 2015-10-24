angular
    .module("app-gg")
    .controller('ProductController', ProductController);

ProductController.$inject = ['$meteor', '$stateParams', '$sce'];

function ProductController($meteor, $stateParams, $sce) {
    var vm = this;

    vm.product = $meteor.object(ProductsCollection, $stateParams.productId);
    vm.trustedVideoUrl = $sce.trustAsResourceUrl(vm.product.videoUrl);

    ////////////

    // Implementation goes here
}
