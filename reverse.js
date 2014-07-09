function reverseMe(word) {
	var rev = '';

	for (var i = word.length - 1; i >= 0; i--) {
		rev += word[i];
	}
	console.log(rev);
}

reverseMe("dart");
