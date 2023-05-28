import { describe, expect, test } from '@jest/globals';

// Import the Sifter class
import Sifter from '../../lib/sifter.js';

// Define some mock data for testing
const columns = { id: 'ID', name: 'Name', age: 'Age' };
const rows = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Define the expected results for testing
const arrayList = [
  ['ID', 'Name', 'Age'],
  [1, 'Alice', 25],
  [2, 'Bob', 30],
  [3, 'Charlie', 35]
];

const objectList = [
  { ID: 1, Name: 'Alice', Age: 25 },
  { ID: 2, Name: 'Bob', Age: 30 },
  { ID: 3, Name: 'Charlie', Age: 35 }
];

// Write the jest tests for the Sifter class
describe('Sifter class', () => {
  // Test the toArrayList method
  test('toArrayList should convert columns and rows to an array of arrays', () => {
    // Call the method with the mock data
    const result = Sifter.toArrayList(columns, rows);
    // Expect the result to match the expected arrayList
    expect(result).toEqual(arrayList);
  });

  // Test the toObjectList method
  test('toObjectList should convert columns and rows to an array of objects', () => {
    // Call the method with the mock data
    const result = Sifter.toObjectList(columns, rows);
    // Expect the result to match the expected objectList
    expect(result).toEqual(objectList);
  });
});
