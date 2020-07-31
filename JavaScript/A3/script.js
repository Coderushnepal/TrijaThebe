console.log("q1");
var sequence = function(str) {
    var a = [];
    var res = str.split('1').sort().pop();
    a.push(res);
	return res;
};
console.log(sequence("112341234"));
