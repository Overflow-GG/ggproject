Meteor.publish('UsersCollection', function() {

  return Meteor.users.find({});

});
