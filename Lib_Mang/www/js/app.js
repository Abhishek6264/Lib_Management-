// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  
  });
})

.config(function($stateProvider, $urlRouterProvider) {
            showPosition = function showPosition(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            localStorage.setItem('lati', JSON.stringify(lat));
            localStorage.setItem('longi', JSON.stringify(long));
            console.log(lat);
            console.log(long); 
           }


         
          
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  

  $stateProvider
 .state('addbook', {
    url: '/addbook',
    controller: 'AddBookCtrl',
    templateUrl: 'pages/addbook.html',
  })

// .state('addbook', {
//           url: '/addbook',
//           views: {
//               '': {
//                   templateUrl: 'pages/addbook.html',
//                   controller: 'AddBookCtrl',
//               }
//           }
//     })

.state('booklist', {
    url: '/booklist',
    controller: 'BookListCtrl',
    templateUrl: 'pages/booklist.html',
  })

.state('adminlogin', {
    url: '/adminlogin',
    controller: 'AdminLoginCtrl',
    templateUrl: 'pages/adminlogin.html',
  })


.state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'pages/login.html',
  });

  $urlRouterProvider.otherwise('/login');

})
