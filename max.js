var business = 350;
var minister = 450;

if(business > minister){
    console.log("Business is bigger");
}
else{
    console.log("Minister is bigger");
}

var business = 2350;
var minister = 1450;
var shochib = 500;

if(business > minister){
    if(business > shochib){
        console.log("Business is Bigger");
    }
    else{
        console.log("Shochib is Bigger");
    }
}
else{
    if(minister > shochib ){
        console.log("Minister is Bigger");
    }
    else{
        console.log("Shochib is Bigger");
    }
}


var business = 2;
var minister = 1;
var shochib = 5;
var max = Math.max(business, minister,shochib);
console.log(max);
