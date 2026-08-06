function buildTaco(firstFilling, secondFilling) {
  return `Taco with ${firstFilling} and ${secondFilling}`;
}

function makeMeatTaco(meatFilling) {
  return function(otherFilling) {
    return buildTaco(meatFilling, otherFilling);
  };
}

let chickenTaco = makeMeatTaco('chicken');

console.log(chickenTaco('grilled onions'));
console.log(chickenTaco('salsa verde'));
