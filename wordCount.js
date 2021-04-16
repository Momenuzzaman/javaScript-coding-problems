var word ="You are a good person. You don't snore at night.";
var count = 0;
for(var i= 0; i < word.length; i++){
    var char = word[i];
    if(char == " "){
        count++;
    }
}
count++;
console.log(count);