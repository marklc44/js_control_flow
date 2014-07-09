var arr = ['echo', 'bravo', 'foxtrot', 'animal'];

function filterLongWords(arr, maxLength) {
	var arr2 = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length <= maxLength) {
			arr2.push(arr[i]);
		}
	}
	return arr2;
}

console.log(filterLongWords(arr, 5));


