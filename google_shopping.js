var data = require("./products.json")

// Write your solutions below

// --- Count Kinds --- //
function countProducts(data) {
	var count = 0;

	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i]['kind'] === "shopping#product") {
			count++;
		}
	}
	return count;
}

console.log(countProducts(data));
// This total is also listed as:
// data["itemsPerPage"] = 25;
// data["currentItemCount"] = 25;


// --- Find Backorders --//

function findBackorders(data) {
	var backordered = [];
	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].product.inventories[0].availability === "backorder") {
			backordered.push(data.items[i]);
		}
	}
	return backordered;
}

var bo = findBackorders(data);
for (var i = 0; i < bo.length; i++) {
	console.log(bo[i].product.title + " ");
}

console.log("-----------------");

// --- Find all items 1+ Links --- //

function findMultipleLinks(data) {
	var items = [];

	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].product.images.length > 1) {
			items.push(data.items[i]);
		}
	}
	return items;
}

var multiLink = findMultipleLinks(data);
console.log(multiLink.length);
for (var i = 0; i < multiLink.length; i++) {
	console.log(data.items[i].product.title + " ");
} 

console.log("-----------------");

// --- Find Canon Products --- //

function findCanon(data) {
	var items = [];

	for (var i = 0; i < data.items.length; i++) {
		if ((data.items[i].product.brand).toLowerCase() === 'canon') {
			items.push(data.items[i]);
		}
	}
	return items;
}

var canon = findCanon(data);
console.log(canon.length);
for (var i = 0; i < canon.length; i++) {
	console.log(canon[i].product.title + " ");
} 

console.log("-----------------");

// --- Find Canon Products --- //

function findEbay(data) {
	var items = [];

	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].product.author.name === 'eBay' && (data.items[i].product.brand).toLowerCase() === 'canon') {
			items.push(data.items[i]);
		}	
	}
	return items;
}

var ebay = findEbay(data);
console.log(ebay.length);
for (var i = 0; i < ebay.length; i++) {
	console.log(ebay[i].product.title + " ");
} 

console.log("-----------------");

// --- Find Canon Products --- //

function printDeets(data) {
	var items = [];

	for (var i = 0; i < data.items.length; i++) {
		console.log(data.items[i].product.brand);
		console.log(data.items[i].product.inventories[0].price);
		for (var j = 0; j < data.items[i].product.images.length; j++) {
			console.log(data.items[i].product.images[j].link);
		}
	}
}

printDeets(data);






// console.log(data["items"]);