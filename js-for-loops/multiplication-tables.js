//multiplication table of 9

for (let count = 1; count <= 10; count++) {
  const calculateTable9 = count * 9;
  console.log(`${count} x 9 = ${calculateTable9}`);
}

//makkelijker
for (let count = 1; count <= 10; count++) {
  const table = 9;
  console.log(`${count} x ${table} = ${count * table}`);
}

// 1 x 9 = 9
// 2 x 9 = 18
// 3 x 9 = 27
// etc...

//Bonus: use a nested for loop to write the multiplication tables of 1 until 10. Start the loop at the lowest number (in this case 1). The output now looks like this:

for (let count = 1; count <= 10; count++) {
  for (let table = 1; table <= 10; table++) {
    console.log(`${count} x ${table} = ${count * table}`);
  }
}

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// etc...

// ...
// 9 x 1 = 9
// 9 x 2 = 18
// 9 x 3 = 27
// ...etc
