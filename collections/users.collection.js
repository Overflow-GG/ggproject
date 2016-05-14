Meteor.users.allow({
  insert: function(userId, account) {
    return false; // Users can only be created server-side
  },
  update: function(userId, account, fields, modifier) {
    return userId && account._id === userId; // A user can only edit his own profile
  },
  remove: function(userId, account) {
    return false; // User can only be eliminated server-side
  }
});
