var number = [10,15,14,16,18,20,23];
var sum = 0;
for(var i = 0; i < number.length; i++){
    var element = number[i];
    sum = sum + element;
    
}
console.log(sum);


function arrayNumberSum(){
    var sum = 0;
    for(var i = 0; i < number.length; i++){
    var element = number[i];
    sum = sum + element;
    
    }
    return sum;
}

var number = [10,15,14,16,18];
var result = arrayNumberSum(number);
console.log(result);


