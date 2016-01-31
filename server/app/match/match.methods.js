Meteor.methods({

  joinMatch: function(gameId, user) {

    // Variables
    var match;
    var player;
    var matchId;

    /**
     * A player is an Account that participates in match
     * @param {String}          accountId           ID of the Account associated with this player
     * @param {String}          username            Username of the associated Account
     * @param {String}          avatarUrl           URL of the associated Account's avatar image
     */
    function Player(accountId, username, avatarUrl) {
      this.accountId = accountId;
      this.username = username;
      this.avatarUrl = avatarUrl;
    }

    /**
     * A match is were players gather together to compete within each other to win awards (points that can be later exchanged for products)
     * @param {Game}            game                A Game (which is a Product) where the players want to compete on
     * @param {MatchStatus}     status              Current status of the match
     * @param {Number}          fee                 The cost in dollars of joining this match
     * @param {Array<Player>}   players             An array of players involved in the match
     * @param {Array<Number>}   awards              An array that contains the points to be awarded for the 1st, 2nd, 3th, etc, positions at the end of the match
     * @param {Array<Message>}  messages            Players messages of the match's chat
     */
    function Match(game, status, fee, players, awards, messages) {
      this.game = game;
      this.status = status;
      this.fee = fee;
      this.players = players;
      this.awards = awards;
      this.messages = messages;
      this.createdAt = new Date();
    }

    /**
     * An object used as an Enum for indicating the current state of a match
     * @type {Number}
     */
    var MatchStatus = Object.freeze({
      ERROR: 'ERROR',
      WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS',
      ONGOING: 'ONGOING',
      ENDED: 'ENDED'
    });

    // ** RELEVANT CODE BELOW **

    // Check arguments types
    check(gameId, String);

    if (!user) throw new Meteor.Error(403, "You must be logged in to join a match");

    // Try to get the specified game from the BD
    var game = GamesCollection.findOne(gameId);
    if (!game) throw new Meteor.Error(404, "Couldn't join a game with ID " + gameId);

    // The user needs to be a player to enter a match
    //var player = new Player(user._id, user.name, user.avatarUrl);
    player = new Player(user._id, user.name,
      "https://s3.amazonaws.com/uifaces/faces/twitter/rosspw/128.jpg");

    // Check if there is an available match for this game
    match = MatchsCollection.findOne({
      $and: [{
        "game._id": gameId
      }, {
        "status": MatchStatus.WAITING_FOR_PLAYERS
      }]
    });

    // If an available match was found, let's include the player in that match
    if (match) {
      newStatus = (match.game.slots === (match.players.length - 1)) ? MatchStatus.ONGOING :
        MatchStatus.WAITING_FOR_PLAYERS;
      MatchsCollection.update(match._id, {
        $addToSet: {
          players: player
        },
        $set: {
          status: newStatus
        }
      });
      matchId = match._id;
      console.log("Player " + player.accountId + " joins the match " + matchId +
        " of the game with id " + gameId);
    }
    // If we can't find an available match, create a new instance of a match for the requested game and include the player there
    else {
      match = new Match(game, MatchStatus.WAITING_FOR_PLAYERS, 0.99, [player], [1000, 250], []);
      matchId = MatchsCollection.insert(match);
      console.log("Starting a new match of " + game.name + " with the id " + matchId);
      console.log("Player " + player.accountId + " joins the match " + matchId);
    }

    return matchId;
  }

});
