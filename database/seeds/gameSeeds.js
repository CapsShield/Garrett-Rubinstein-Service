const faker = require('faker');
console.log('hi');
const seeds = [
  {
    id: 1,
    title: 'Antichamber'
  } //1st seed is static for presentation purposes
];

for (var i = 1; i < 101; i++) {
  seeds.push({
    id: i + 1,
    title: faker.random.words()
  });
}

module.exports = seeds;