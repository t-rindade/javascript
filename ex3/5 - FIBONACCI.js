function fibonacciSequence(count) {
  let sequence = [0, 1];

  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

const firstTen = fibonacciSequence(10);
console.log(firstTen);
