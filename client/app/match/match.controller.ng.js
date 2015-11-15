angular
    .module("app-gg")
    .controller('MatchController', MatchController);

MatchController.$inject = ['$meteor', '$stateParams', '$rootScope'];

function MatchController($meteor, $stateParams, $rootScope) {
    var vm = this;

    vm.match = null;

    onStart();

    ////////////

    function onStart() {
        if (!vm.match) joinMatch();
    }

    function joinMatch() {
        $meteor.call('joinMatch', $stateParams.gameId, $rootScope.currentUser).then(
            function(match) {
                console.log('Joined match successfully');
                vm.match = $meteor.object(MatchsCollection, match._id);
            },
            function(error) {
                console.log('Failed to join a match. Reason: ', error);
            }
        );
    }
}