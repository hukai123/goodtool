
//JS浮点数相加会自动在小数点后加很多位
module.exports.formatJsAdd = function (num1,num2){
	var sq1,sq2,m;
	try{sq1=num1.toString().split(".")[1].length;} catch(e){sq1=0;}
	try{sq2=num2.toString().split(".")[1].length;} catch(e){sq2=0;}

	m=Math.pow(10,Math.max(sq1,sq2));
	return ( num1 * m + num2 * m ) / m;
}

//金钱数字千位加逗号
module.exports.formatRmbNum = function (str){
	if(str && typeof(str) == 'number'){
		str += ""
	}
	var v, j, sj, rv = "";
	v = str.replace(/,/g, "").split(".");
	j = v[0].length % 3;
	sj = v[0].substr(j).toString();
	for(var i = 0; i < sj.length; i++) {
		rv = (i % 3 == 0) ? rv + "," + sj.substr(i, 1) : rv + sj.substr(i, 1);
	}
	var rvalue = (v[1] == undefined) ? v[0].substr(0, j) + rv : v[0].substr(0, j) + rv + "." + v[1];
	if(rvalue.charCodeAt(0) == 44) {
		rvalue = rvalue.substr(1);
	}
	return rvalue;
}