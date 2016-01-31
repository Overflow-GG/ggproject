angular
  .module("app-gg")
  .controller('ProductController', ProductController);

ProductController.$inject = ['$scope', '$reactive', '$stateParams', '$sce'];

function ProductController($scope, $reactive, $stateParams, $sce) {
  $reactive(this).attach($scope);

  onSubscribe(this);
  onCreateHelpers(this);
  onStart(this);

  ////////////

  function onSubscribe(controller) {
    controller.subscribe("ProductsCollection");
  }

  ////////////

  function onCreateHelpers(controller) {
    // Helpers exposed as VM
    controller.helpers({
      product: () => {
        return ProductsCollection.findOne($stateParams.productId)
      },
      trustedVideoUrl: () => {
        // Required by Angular for security reasons
        return $sce.trustAsResourceUrl(controller.product.videoUrl);
      }
    });
  }

  ////////////

  function onStart(controller) {
    // Nothing...
  }
}
