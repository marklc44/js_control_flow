function grader(score) {
	
	if (score >= 90) {
		return "A";
	} else if (score >= 80 && score < 90) {
		return "B";
	} else if (score >= 70 && score < 80) {
		return "C";
	} else if (score >= 60 && score < 70) {
		return "D";
	} else {
		return "F";
	}
}

function graderSwitch(score) {

	switch (true) {
		case (score >= 90):
			return "A";
			break;
		case (score >= 80 && score < 90):
			return "B";
			break;
		case (score >= 70 && score < 80):
			return "C";
			break;
		case (score >= 60 && score < 70):
			return "D";
			break;
		default:
			return "F";
			break;
	}
}


console.log(grader(90));
console.log(graderSwitch(82));


