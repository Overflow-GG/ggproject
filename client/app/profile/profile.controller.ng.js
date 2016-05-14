angular
  .module("app-gg")
  .controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$reactive', '$stateParams'];

function ProfileController($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);

  // Exposed variables
  var vm = this;
  vm.username = '';
  vm.email = '';
  vm.steamId = '';
  vm.riotId = '';

  onSubscribe(this);
  onCreateHelpers(this);
  onStart(this);

  ////////////

  function onSubscribe(controller) {
    controller.subscribe("UsersCollection");
  }

  ////////////

  function onCreateHelpers(controller) {
    // Helpers exposed as VM
    controller.helpers({
      user: () => {
        return getUser();
      }
    });
  }

  ////////////

  function onStart(controller) {

    // Populate elements
    if (controller.user.profile) {
      vm.username = controller.user.profile.username;
      vm.steamId = controller.user.profile.steamId;
      vm.riotId = controller.user.profile.riotId;
    }
    vm.email = controller.user.emails[0].address;
  }

  ////////////

  function getUser() {
    return Meteor.users.findOne($stateParams.userId);
  }

  vm.updateProfile = function updateProfile() {

    var accountForUpdate = {
      emails: [{}],
      profile: {}
    };

    if (vm.username) accountForUpdate.profile.username = vm.username;
    if (vm.steamId) accountForUpdate.profile.steamId = vm.steamId;
    if (vm.riotId) accountForUpdate.profile.riotId = vm.riotId;
    if (vm.email) {
      accountForUpdate.emails[0].address = vm.email;
      accountForUpdate.emails[0].verified = false;
    }

    Meteor.users.update({
      _id: Meteor.userId()
    }, {
      $set: accountForUpdate
    })

    // Deprecated in favour of client-side operations
    /*Meteor.call("updateProfile", vm.username, function(error, result) {
      if (error) {
        console.log('Failed to update the profile. Reason: ', error);
      } else {
        console.log('Updated profile successfully');
      }
    });*/


  }

}
