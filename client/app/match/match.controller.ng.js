angular
    .module("app-gg")
    .controller('MatchController', MatchController);

MatchController.$inject = ['$meteor', '$stateParams'];

function MatchController($meteor, $stateParams) {
    var vm = this;

    vm.match = $meteor.object(MatchsCollection, $stateParams.matchId);

    ////////////

    // Implementation goes here
}
