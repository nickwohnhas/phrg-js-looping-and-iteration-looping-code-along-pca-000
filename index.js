// Code your solutions in this file
function printBadges(name_array) {
  for (let i = 0; i < name_array.length; i++) {
    console.log(`Welcome ${name_array[i]}! You are employee #${i + 1}.`);
  }
  return name_array
}

function tailsNeverFails() {
  let tails_count = 0
  while (maybeTrue()) {
    tails_count++
  }
  return `You got ${tails_count} tails in a row!`
}
function getRandom() {
  return Math.random();
}

function maybeTrue () {
  return Math.random() >= 0.5;
}
