'use strict';

 var intrellise = angular.module('intrellise',[
                  'ui.router'
                 ]);

 intrellise.config([
     '$urlRouterProvider',
     '$stateProvider',
     function($urlRouterProvider,$stateProvider){

      /*Code for routing modules*/
      $urlRouterProvider.otherwise('/404'); //Default

      $stateProvider
	.state('404',{
	 url:'/404',
         templateUrl: 'js/lost/lost-view.html'
	})
	.state('404.navi',{
	 url:'/navi',
         templateUrl: 'js/navi/navi-view.html'
	})
	.state('home',{
	  url:'/home',
	  templateUrl:'js/home/home-view.html'
	})  
	.state('vnav',{
	  url:'/vnav',
	  templateUrl:'js/vnav/vnav-view.html',
	});
      /*End Code for routing modules*/

     }]);//End Config

