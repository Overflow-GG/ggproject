angular
    .module("app-gg")
    .controller('MatchController', MatchController);

function MatchController($stateParams) {
    var vm = this;

    vm.matchId = $stateParams.matchId;

    ////////////

    // Implementation goes here
}
