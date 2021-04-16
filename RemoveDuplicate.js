var id = [1,2,3,4,5,3,5,7,8,9,6,7];
var uniqeNumber = [];

for (var i = 0; i < id.length; i++){
    var element = id[i];
    var index = uniqeNumber.indexOf(element);
    if(index == -1){
        uniqeNumber.push(element);
    }
}
console.log(uniqeNumber);
