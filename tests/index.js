const testSeed = require('./testSeed.js');
const testQuery = require('./testQuery.js');

//testSeed(() => console.log('\n*** SEED TESTS ***\n'));
var gamesToTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
gamesToTest.forEach((gameId) => testQuery(() => console.log(`\n*** QUERY TESTS ${gameId} ***\n`), gameId));



