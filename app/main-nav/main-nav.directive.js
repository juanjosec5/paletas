(function() {

    'use strict';

    angular
        .module('mainNav')
        .directive('navbar', navbar);

    function navbar() {
        return {
            restrict: 'E',
            templateUrl: '/app/main-nav/main-nav.html',
            controller: navController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    function navController() {
        var vm = this;
    }
})();