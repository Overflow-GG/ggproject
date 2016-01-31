Meteor.publish('MatchsCollection', function() {

  return MatchsCollection.find({});

});
