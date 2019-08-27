let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();

// 1. What name will it print and why
// Morty since we are re-assigning the value before calling the function in the same scope