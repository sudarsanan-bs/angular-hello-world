'use strict';
angular.module('carList').
		component('carList', {templateUrl : 'car-list/car-list.template.html',controller  : ['$http',function carListController($http){
																var self=this;
																self.title = {'b':'Brand','m':'Model'};
																self.orderProp = 'age';
																$http.get('cars/cars.json').then(function(response){self.cars=response.data;});/**[
																				{brand : 'Mazda', model : 'RX8', age : 43},
																				{brand : 'Subaru', model : 'WRX', age : 35},
																				{brand : 'Nissan', model : 'Skyline GTR', age : 12},
																				{brand : 'Toyota', model : 'Supra', age : 1}
																			];*/
																
																}]
							}
				);