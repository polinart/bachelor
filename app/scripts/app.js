'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
    .module('sbAdminApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $urlRouterProvider.otherwise('/login');


        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'sbAdminApp',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name: 'toggle-switch',
                                    files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngAnimate',
                                    files: ['bower_components/angular-animate/angular-animate.js']
                                })
                        $ocLazyLoad.load(
                            {
                                name: 'ngCookies',
                                files: ['bower_components/angular-cookies/angular-cookies.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngResource',
                                files: ['bower_components/angular-resource/angular-resource.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngSanitize',
                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngTouch',
                                files: ['bower_components/angular-touch/angular-touch.js']
                            })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'views/dashboard/home.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/mainPageCtrl.js',
                                'scripts/directives/timeline/timeline.js',
                                'scripts/directives/notifications/notifications.js',
                                'scripts/directives/schedule/schedule.js',
                                'scripts/directives/dashboard/stats/stats.js'
                            ]
                        })
                    }
                }
            })

            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })


            .state('dashboard.profile', {
                templateUrl: 'views/personal-data/profile.html',
                url: '/profile',
                controller: 'profileCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/profileCtrl.js']
                        })
                    }
                }
            })
            .state('dashboard.contracts', {
                templateUrl: 'views/personal-data/contracts.html',
                url: '/contracts',
                controller: 'contractsListCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/contractsCtrl.js']
                        })
                    }
                }

            })
            .state('dashboard.payments', {
                templateUrl: 'views/personal-data/payments.html',
                url: '/payments',
                controller: 'paymentCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/paymentCtrl.js']
                        })
                    }
                }

            })
            .state('dashboard.orders', {
                templateUrl: 'views/personal-data/orders.html',
                url: '/rectors-orders',
                controller: 'rectorOrdersCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/rectorOrdersCtrl.js']
                        })
                    }
                }
            })
            .state('dashboard.grade', {
                templateUrl: 'views/personal-data/grade.html',
                url: '/grade',
                controller: 'gradesCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/gradesCtrl.js']
                        })
                    }
                }
            })
            .state('dashboard.documents', {
                templateUrl: 'views/documents.html',
                url: '/documents',
                controller: 'documentsCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/documentsCtrl.js']
                        })
                    }
                }
            })
            .state('dashboard.news', {
                templateUrl: 'views/news.html',
                url: '/news'
            })
            .state('dashboard.bach-info', {
                templateUrl: 'views/bach-info.html',
                url: '/bachelor-info'
            })
            .state('dashboard.contacts', {
                templateUrl: 'views/contacts.html',
                url: '/contacts'
            })
    }]);

    
