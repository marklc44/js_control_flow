
function pluralize(word, count) {
	if (count < 1 || count > 1) {
		return count + ' ' + word + 's';
	} else {
		return count + ' ' + word;
	}
}

console.log(pluralize("cat", 1));

