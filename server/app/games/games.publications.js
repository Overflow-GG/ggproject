Meteor.publish('GamesCollection', function() {

  return GamesCollection.find({});

});
