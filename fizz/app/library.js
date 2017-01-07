'strict'
var file = {}
file.fizzBuzz = function(number){

	if (typeof number != 'number'){
	    return 'only takes a numbers as argument';
	}

	if (number == 0){
		return 0;
	}

	if (number%3 === 0 && number%5 === 0){
		return 'FizzBuzz';
	}

	if (number%3 === 0){
		return 'Fizz';
	}

	if (number%5 === 0){
		return 'Buzz';
	}
	if (number%3 !== 0 && number%5 !== 0){
		return number;
	}

}
module.exports = file;