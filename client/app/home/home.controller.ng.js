angular
    .module("app-gg")
    .controller('HomeController', HomeController);

HomeController.$inject = ['$meteor'];

function HomeController($meteor) {
    var vm = this;

    vm.products = $meteor.collection(ProductsCollection);
    vm.matchs = $meteor.collection(MatchsCollection);

    ////////////

    // Implementation goes here
}
