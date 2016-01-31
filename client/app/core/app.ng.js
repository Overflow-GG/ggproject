angular
    .module('app-gg', [
        'angular-meteor',
        'ui.router',
        'ui.bootstrap',
        'accounts.ui'
    ]);

function onReady() {
    angular.bootstrap(document, ['app-gg']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);