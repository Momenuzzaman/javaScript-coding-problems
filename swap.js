var a = 10;
var b = 20;
console.log("Befor swap: a =", a, ",b =", b);
var temp = a;
 a = b;
 b = temp;
 console.log("After swap: a =", a, ",b =", b);


 var x =15;
 var y = 25;
  x = x + y;
  y = x - y;
  x = x - y;
  console.log("After swap: x =", x, "y =",y);

  var p = 50;
  var q = 60;
  [p, q] = [q, p];
  console.log("After swap: p =", p, "q =",q);


