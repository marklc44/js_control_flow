function tempConvert(temp, f2c) {
	var temp2;

	if (f2c) {
		temp2 = temp * 9 / 5 + 32;
	} else {
		temp2 = (temp - 32) * 5 / 9;
	}
	return temp2;
}

var fahr = 60;
console.log(fahr + "\u00B0 C = " + tempConvert(fahr, false) + "\u00B0 F.");