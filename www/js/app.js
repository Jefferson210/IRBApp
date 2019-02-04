// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('irbApp', ['ionic','ng-token-auth','ui.router','ngResource'])

.config(function($authProvider) {
    $authProvider.configure({
        // apiUrl: 'http://localhost:3000/api/v1'        
        apiUrl: 'https://irb-v3-jefferson210.c9users.io:8080/api/v1',   
    })
})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs).
        // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
        // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
        // useful especially with forms, though we would prefer giving the user a little more room
        // to interact with the app.
        if (window.cordova && window.Keyboard) {
            window.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            // Set the statusbar to use the default style, tweak this to
            // remove the status bar on iOS or change it to use white instead of dark colors.
            StatusBar.styleDefault();
        }
    });
})

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("app");

    $stateProvider
        .state('app', {
        url: "/app",
        templateUrl: "views/signIn.html",
        controller: "signInCtrl"
    })
        .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "homeCtrl"
    })
//        .state('estado3', {
//        url: "/estado3",
//        templateUrl: "plantilla3.html"
//    }) 

});
