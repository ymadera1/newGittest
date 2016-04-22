angular.module('MyApp', [])

.controller('MainController', function() {
	var self = this;

	self.onButtonClick = function(show) {
		if (show) {
			alert('you clicked the button');
		}
	};

	self.classObject = {
		red: false,
		green: false,
		yellow: false
	}

	self.myDog = {
		name: 'Max'
	};

	self.myCat = {
		name: 'Sally'
	};

	self.myCow = {
		name: 'Harry'
	};


	self.select = true;

	self.username = 'tommy';

	self.greeting = 'Hello, yous';

	self.simpleArray = ['Item1' , 'Item2' , 'Item3', 'Item4'];

	self.interArray = [{
		name: 'george'
	}, {
		name: 'Harry'
	}, {
		name: 'Sally'
	}];

	self.states = {
		CA: 'California',
		NY: 'New York',
		FL: 'Floriday'
	};

});