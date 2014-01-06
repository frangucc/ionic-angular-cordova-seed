// START - Thinkster-firebase-tutorial app.js
'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('fantasyApp',
  [ 'fantasyApp.config'
  , 'fantasyApp.controllers.header'
  , 'fantasyApp.controllers.signin'
  , 'fantasyApp.controllers.signup'
  , 'fantasyApp.controllers.todos'
  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )

// END - Thinkster-firebase-tutorial app.js

// TODO : FRANK, Fix syntax below to match above or deprectate the start app. 

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate', 'starter.services', 'starter.controllers'])

.config(function ($compileProvider){
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

// TODO: FRANK, Kill these routes and put them in the config or in a routes.js file 
.config(function($routeProvider, $locationProvider) {

  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $routeProvider.when('/project', {
    templateUrl: 'templates/projects.html',
    controller: 'ProjectCtrl'
  });

    $routeProvider.when('/home', {
    templateUrl: 'templates/app.html',
    controller: 'AppCtrl'
  });

  // if the url matches something like /pet/2 then this route
  // will fire off the PetCtrl controller (controllers.js)
  $routeProvider.when('/pet/:petId', {
    templateUrl: 'templates/pet.html',
    controller: 'PetCtrl'
  });



  // if none of the above routes are met, use this fallback
  // which executes the 'AppCtrl' controller (controllers.js)
  $routeProvider.otherwise({
    redirectTo: '/home'
  });

  $routeProvider.when('/index_todos', {
    redirectTo: '/index_todos.html',
    controller: 'TodoCtrl'
  });


});

// ######################################################################################
// TODO: FRANK: From the Nitrious.io ionic todo list - merge this shit properly with the above code
// ######################################################################################
