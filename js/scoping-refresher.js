var width = 100;

function setWidth() {
  width = 100;
}
setWidth();
var age = 100;

// non scope
/*if (age > 12) {
  var dogYears = age * 7;
  console.log(`Your are ${dogYears} dogs years old `);
}*/
console.log(dogYears);

// scope dogYears
if (age > 12) {
  let dogYears = age * 7;
}

console.log(dogYears);
