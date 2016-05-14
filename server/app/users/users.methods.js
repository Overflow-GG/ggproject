Meteor.methods({

  // This method has been deprecated for now in favour of client-side profile updates
  // controlled by access rules setted to collections (eg: only allow to update your own account)
  /*updateProfile: function(username) {

    var loggedUserId = Meteor.userId();

    // Verify that there is a logged user
    if (loggedUserId) {

      // Update logged user document
      Meteor.users.update({
        _id: loggedUserId
      }, {
        $set: {
          "profile.username": username
        }
      })

    } else {
      throw new Meteor.Error(403, "You must be logged in to update your account");
    }
  }*/

});
