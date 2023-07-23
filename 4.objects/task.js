function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if ("marks" in this) {
		this.marks.push(...marks)
	}
}

Student.prototype.getAverage = function() {
	if ("marks" in this && this.marks.length != 0) {
		return (this.marks.reduce((sum, mark, index, arr) => {
			sum += mark;
			if (index === (arr.length - 1)) {
				return sum / arr.length;
			}
			return sum;
		}, 0));
	}
	return 0;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
