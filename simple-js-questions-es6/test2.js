let name = 'Rick';

function greetMe(name) {
  console.log(`Hi ${this.name}!`);
}

greetMe('George');

// 1. What name will it print and why
