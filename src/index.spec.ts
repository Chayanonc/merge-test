import { merge } from "./index"; // Assuming your function is in a file named merge.ts

describe("merge function", () => {
  it("should merge three collections and return sorted array", () => {
    const collection1 = [5, 7, 8, 11];
    const collection2 = [10, 9, 3, 2];
    const collection3 = [1, 4, 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty collections", () => {
    const collection1: number[] = [4, 6, 7];
    const collection2: number[] = [11, 10, 9, 2, 1];
    const collection3: number[] = [6, 8, 10];
    const expectedOutput: number[] = [1, 2, 4, 6, 6, 7, 8, 9, 10, 10, 11];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle collections with different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [0];
    const expectedOutput = [0, 1, 2, 3, 4, 5, 6];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expectedOutput);
  });
});
