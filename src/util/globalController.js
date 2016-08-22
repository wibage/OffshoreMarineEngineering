(function () {
    'use strict';
    angular.module('util', ['ngRoute']);

    angular
        .module('util')
        .controller('globalController', ['$rootScope', '$routeParams', '$log', '$q', '$scope', '$window', 'localStorage', 'httpService', globalController]);

    function globalController($rootScope, $routeParams, $log, $q, $scope, $window, localStorage, facebookService, httpService) {
        var self = this;
        self.user = {
            Name: "Guest"
        };

        var setUser = function (userDetail) {
            self.user = {
                Name: userDetail.name,
                isAuthenticated: true
            };

            var reqObj = {
                method: "post",
                data: userDetail,
                url: GLOBALCONFIG.ServiceManager.getUrls('registerUser')
            };

            httpService.makeRequest(reqObj, function (res) {
                console.log("User Registered!");

            }, function (err) {
                debugger;
            });
        };

        var saveToken = function (token) {
            var accessToken = {
                tokenValidator: 'facebook',
                token: token.authResponse
            }
            localStorage.setData('accesstoken', accessToken);
        };

    }

})();