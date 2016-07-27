//step 1
var value = 42;

//step 2
if (value >= 53) {
	value = value + 42;
} else {
	value = value - 13;
}

//step 3
var str = "11";
value += str;
console.log("step 3", value);

//step 4
var array = [];
for (var i = 0; i < value.length; i++) {
	array[i] = value.charAt(i);
}
console.log("step 4 see array", array);

//step 5
array.shift();
array.pop();
console.log("step 5 see array", array);

//step 6
var step6 = ""
for (i = array.length - 1; i >= 0; i--) {
	step6 += array[i];
}
console.log("see valriable step6", step6);

//step 7
value = parseInt(value);
step6 = parseInt(step6);
console.log("see value step 7", value);
console.log("see step6 step 7", step6);

// Step 8
value += step6;

// Step 9
if(value < 60) {
	value = 14;
} else if(value == 2930) {
	value = 27;
} else {
	value = 2;
}

console.log("See value step9: ", value);

// Step 10

i = 10;
while(i > 0) {
	i--;
	value++;
}

console.log("See value step10: ", value);

// Step 11
function convert(val) {
	var string = val.toString();
	console.log("String: ", string);
	if(string.length > 1) {
		return string.slice(1, string.length);
	}
}

// Step 12
value = convert(value);

// Step 13
console.log("Step 13: ", value);

