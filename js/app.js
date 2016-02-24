var drawCompanyApp = angular.module("drawCompany", ['ngRoute']);

drawCompanyApp.config(function ($routeProvider) {

    $routeProvider.when("/about", {
        templateUrl: "html/about.html"
    });

    $routeProvider.when("/commercial", {
        controller: "commercialCtrl",
        templateUrl: "html/commercial.html"
    });

    $routeProvider.when("/film", {
        controller: "filmCtrl",
        templateUrl: "html/film.html"
    });

    // $routeProvider.when("/still", {
    //     controller: "stillCtrl",
    //     templateUrl: "html/still.html"
    // });

    $routeProvider.otherwise({
        templateUrl: "html/home.html"
    });

});

drawCompanyApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

drawCompanyApp.controller('commercialCtrl', function($scope, $location, $anchorScroll, $routeParams) {
});

drawCompanyApp.controller('filmCtrl', function($scope, $location, $anchorScroll, $routeParams) {
});

drawCompanyApp.controller('stillCtrl', function($scope, $location, $anchorScroll, $routeParams) {
});


// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    // e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// });