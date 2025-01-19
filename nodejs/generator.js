function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = numberGenerator();

// First for...of loop with break
for (const num of generator) {
  console.log(num); // Outputs: 1, 2
  if (num === 2) break;
}

const firstValue = generator.next(); console.log(firstValue);

// Resume the generator in a second for...of loop
for (const num of generator) {
  console.log(num); // Outputs: 3, 4, 5
}
