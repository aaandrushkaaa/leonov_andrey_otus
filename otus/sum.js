function sum(a) {

  var Sumbuff = a;

  function f(b) {
	  if (isFinite(b)){
    Sumbuff += b;
	  return f;}
	  else return Sumbuff;
  }

  f.toString = function() {
    return Sumbuff;
  };

  return f;
}
console.log(sum(undefined)());//undefined
console.log( sum(1)() ); // 1
console.log( sum(1)(2)(3)(4)() ); // 10
console.log( sum(0)(5)(3)(8)(-2)() ); // 14
console.log( sum(1)(1)(1)(1)(1)(1)(1)() ); // 7*/
