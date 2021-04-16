var marks = [11,22,33,44,55,99,66,77,88,];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
         max = element;
    }
    
}

console.log("Highest number is:", max);