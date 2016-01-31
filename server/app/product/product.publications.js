Meteor.publish('ProductsCollection', function() {

  return ProductsCollection.find({});

});
