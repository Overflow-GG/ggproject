angular
  .module("app-gg")
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$reactive'];

function HomeController($scope, $reactive) {
  $reactive(this).attach($scope);

  onSubscribe(this);
  onCreateHelpers(this);
  onStart(this);

  ////////////

  function onSubscribe(controller) {
    controller.subscribe("ProductsCollection");
    controller.subscribe("GamesCollection");
  }

  ////////////

  function onCreateHelpers(controller) {
    // Helpers exposed as VM
    controller.helpers({
      products: () => {
        return ProductsCollection.find({});
      },
      games: () => {
        return GamesCollection.find({});
      }
    });
  }

  ////////////

  function onStart(controller) {
    // Nothing...
  }

}
