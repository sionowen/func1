function triplefive() {
	for (var i =0; i<3; i++)
	{
		console.log("Five!");

	}
}
triplefive();

var lastletter = function(string) {
	console.log(string[string.length-1]);

}

lastletter("biscuit");

var square = function(num) 
{
	return (num * num);

}
console.log(square(5))

var negate = function(num)
{
	return num * -1;

}

console.log(negate(10))

var toArray = function(arg1, arg2, arg3)
{
	var makeAnArray = [arg1, arg2, arg3];
	return makeAnArray;

}

console.log(toArray(1,2,3))

var startsWithA= function(string)
{
	var test = (string[0] === "a" || string[0] == "A");
	return test;
}
console.log(startsWithA("Aardvark"))

var excite = function(string)
{
	return (string + "!!!")
}
console.log(excite("Booyah"));

var sun= function(string)
{
	var test = (string.indexOf("sun") !== -1);
	return test;
}

console.log(sun("aleeuusunod"));

var tiny = function(number)
{
	var result = (number <= 1 && number>= 0);
	return result;

}

console.log(tiny(0.5));

	var getSeconds = function(string)
	{
		var timeArray = 	string.split(':');
		var secondsCounter = 0;
		var hoursToSecs = 0;
		if (timeArray.length === 3)
		{
			hoursToSecs = (timeArray.shift() * 60 * 60)

		}
	secondsCounter = hoursToSecs + (timeArray[0] *  60) + (timeArray[1] * 1);

	console.log(secondsCounter)

}

getSeconds("1:1:1");























































