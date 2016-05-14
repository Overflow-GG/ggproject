angular
  .module("app-gg")
  .controller('MatchController', MatchController);

MatchController.$inject = ['$scope', '$reactive', '$stateParams'];

function MatchController($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);

  onSubscribe(this);
  onCreateHelpers(this);
  onStart(this);

  ////////////

  function onSubscribe(controller) {
    controller.subscribe("MatchsCollection");
  }

  ////////////

  function onCreateHelpers(controller) {
    // Helpers exposed as VM
    controller.helpers({
      match: () => {
        return getCurrentMatch();
      },
      upperSideAvatars: () => {
        return getUpperSideAvatars();
      },
      lowerSideAvatars: () => {
        return getLowerSideAvatars();
      }
    });
  }

  ////////////

  function onStart(controller) {
    if (!Session.get("currentMatchId")) joinMatch();
  }

  ////////////

  // ** Start of match utils **
  function getCurrentMatch() {
    matchId = Session.get("currentMatchId");
    if (matchId) {
      return MatchsCollection.findOne(matchId);
    }
  }

  function joinMatch() {
    Meteor.call("joinMatch", $stateParams.gameId, Meteor.user(), function(error, matchId) {
      if (error) {
        console.log('Failed to join a match. Reason: ', error);
      } else {
        console.log('Joined match with id ', matchId, ' successfully');
        Session.set("currentMatchId", matchId);
      }
    });
  }
  // ** End of match utils **

  // ** Start of avatars utils **
  // Get an array of avatars' URLs from a players array
  function getAvatarsFromPlayers(players) {
    return players.map(function(player) {
      return player.avatarUrl;
    })
  }

  // Returns an array of avatars urls of the players that goes in the upper section of the view
  function getUpperSideAvatars() {
    match = getCurrentMatch();
    if (match) {
      players = match.players.slice(0, (match.players.length / 2) + 1);
      return getAvatarsFromPlayers(players);
    }
  }

  // Returns an array of avatars urls of the players that goes in the lower section of the view
  function getLowerSideAvatars() {
    match = getCurrentMatch();
    if (match) {
      players = match.players.slice((match.players.length / 2) + 2, match.players.length);
      return getAvatarsFromPlayers(players);
    }
  }
  // ** End of avatars utils **
}
