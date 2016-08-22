(function () {

    angular
        .module('TL', ['ngRoute', 'ui.bootstrap', 'util', 'home', 'shared']);


    angular.module('TL').config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "src/home/view/home.html"
        }).when("/contact", {
            templateUrl: "src/contactus/contactus.html"
        }).otherwise({
            redirectTo: '/'
        });
    });
})();