var john = {
	fullName: 'John Smith',
	mass: 69,
	height: 2,
	calcBmi: function() {
	  this.bmi = this.mass / this.height * this.height
	  return this.bmi;
	}
}

var mark = {
	fullName: 'Mark Smith',
	mass: 79,
	height: 2,
	calcBmi: function() {
	  this.bmi = this.mass / this.height * this.height
	  return this.bmi;
	}
}


function compareBmi() {
  
  if (john.calcBmi() > mark.calcBmi()) {
	console.log(john.fullName + ' has a higher BMI');
  } else if (john.bmi < mark.bmi) {
	console.log(mark.fullName + ' has a higher BMI');
  } else {
	console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI');
  }
}

compareBmi();