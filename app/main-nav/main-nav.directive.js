(function() {

    'use strict';

    angular
        .module('mainNav')
        .directive('navbar', navbar);

    function navbar() {
        return {
            restrict: 'E',
            template: '<p>main navigation</p>',
            controller: navController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    function navController() {
        var vm = this;
    }
})();