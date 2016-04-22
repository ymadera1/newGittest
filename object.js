var items = [

	{
		name : "hammer",
		cost : 9.99,
		id : 101,
		picture : "hammer.jpg",
	},

	{
		name : "screwdriver",
		cost : 5.99,
		id : 102,
		picture : "screwdriver.jpg",
	},

	{
		name : "jackhammer",
		cost : 40.99,
		id : 103,
		picture : "jackhammer.jpg",
	},

	{
		name : "spatula",
		cost : 6.99,
		id : 104,
		picture : "spatula.jpg",
	},


];
	

function listItems() {
	for(var i = 0; i < items.length; i++) {

		console.log(items[i].name + " is $" + items[i].cost + ".");
	}
}

listItems();