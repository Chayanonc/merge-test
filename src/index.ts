const merge = (
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] => {
  const numbers: number[] = collection1.concat(collection2).concat(collection3);
  const len: number = numbers.length;

  let i = 1;

  while (i < len) {
    const currNumber: number = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > currNumber) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = currNumber;
    i = i + 1;
  }

  return numbers;
};

console.log(merge([4, 6, 7], [11, 10, 9, 2, 1], [6, 8, 10]));

export { merge };
