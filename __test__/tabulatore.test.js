import { describe, expect, test } from '@jest/globals';

// Import the module from tabulatore.js
import { Sifter, Printer, Renderer } from '../tabulatore.js';
import YAML from 'yaml';
import TOML from '@ltd/j-toml';

// Define some mock data for testing
const columns = { id: 'ID', name: 'Name', age: 'Age' };
const rows = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Write the jest tests for the module
describe('tabulatore module', () => {
  // Test that the module exports the classes correctly
  test('the module should export Sifter, Printer, and Renderer classes', () => {
    // Expect the module to have the named exports
    expect(Sifter).toBeDefined();
    expect(Printer).toBeDefined();
    expect(Renderer).toBeDefined();
    // Expect the exports to be classes with static methods
    expect(Sifter.toArrayList).toBeInstanceOf(Function);
    expect(Sifter.toObjectList).toBeInstanceOf(Function);
    expect(Printer.printAsJSON).toBeInstanceOf(Function);
    expect(Printer.printAsYAML).toBeInstanceOf(Function);
    expect(Printer.printAsTOML).toBeInstanceOf(Function);
    expect(Printer.printAsASCII).toBeInstanceOf(Function);
    expect(Printer.printAsCSV).toBeInstanceOf(Function);
    expect(Printer.printAsTSV).toBeInstanceOf(Function);
    expect(Printer.printAsPSV).toBeInstanceOf(Function);
    expect(Printer.printAsHTML).toBeInstanceOf(Function);
    expect(Printer.printAsMarkdown).toBeInstanceOf(Function);
    expect(Printer.printAsTable).toBeInstanceOf(Function);
    expect(Renderer.toDelimitedTable).toBeInstanceOf(Function);
    expect(Renderer.toHTML).toBeInstanceOf(Function);
    expect(Renderer.toMarkdown).toBeInstanceOf(Function);
    expect(Renderer.toTable).toBeInstanceOf(Function);
  });

  // Test that the module works as expected with the mock data
  test('the module should work as expected with the mock data', () => {
    // Convert the columns & rows to an array list using Sifter
    const arrList = Sifter.toArrayList(columns, rows);
    expect(arrList).toEqual([
      ['ID', 'Name', 'Age'],
      [1, 'Alice', 25],
      [2, 'Bob', 30],
      [3, 'Charlie', 35]
    ]);

    // Convert the columns & rows to an object list using Sifter
    const objList = Sifter.toObjectList(columns, rows);
    expect(objList).toEqual([
      { ID: 1, Name: 'Alice', Age: 25 },
      { ID: 2, Name: 'Bob', Age: 30 },
      { ID: 3, Name: 'Charlie', Age: 35 }
    ]);

    // Mock the console.log function
    console.log = jest.fn();

    // Call the Printer methods with the mock data & expect the console.log to be called with the expected outputs
    Printer.printAsJSON(objList);
    expect(console.log.mock.calls[0][0]).toEqual(JSON.stringify(objList, null, 2));

    Printer.printAsYAML(objList);
    expect(console.log.mock.calls[1][0]).toEqual(YAML.stringify(objList));

    Printer.printAsTOML(objList);
    expect(console.log.mock.calls[2][0]).toEqual(TOML.stringify(objList));

    Printer.printAsASCII(objList);
    expect(console.log.mock.calls[3][0]).toEqual(`┌─────────┬────┬───────────┬─────┐
│ (index) │ ID │   Name    │ Age │
├─────────┼────┼───────────┼─────┤
│    0    │ 1  │  'Alice'  │ 25  │
│    1    │ 2  │   'Bob'   │ 30  │
│    2    │ 3  │ 'Charlie' │ 35  │
└─────────┴────┴───────────┴─────┘`);

    Printer.printAsCSV(arrList);
    expect(console.log.mock.calls[4][0]).toEqual(`ID,Name,Age
1,Alice,25
2,Bob,30
3,Charlie,35`);

    Printer.printAsTSV(arrList);
    expect(console.log.mock.calls[5][0]).toEqual(`ID\tName\tAge
1\tAlice\t25
2\tBob\t30
3\tCharlie\t35`);

    Printer.printAsPSV(arrList);
    expect(console.log.mock.calls[6][0]).toEqual(`ID|Name|Age
1|Alice|25
2|Bob|30
3|Charlie|35`);

    Printer.printAsHTML(arrList, true);
    expect(console.log.mock.calls[7][0]).toEqual(`<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Charlie</td>
      <td>35</td>
    </tr>
  </tbody>
</table>`);

    Printer.printAsHTML(arrList, false);
    expect(console.log.mock.calls[8][0]).toEqual(
      `<table><thead><tr><th>ID</th><th>Name</th><th>Age</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>25</td></tr><tr><td>2</td><td>Bob</td><td>30</td></tr><tr><td>3</td><td>Charlie</td><td>35</td></tr></tbody></table>`
    );

    Printer.printAsMarkdown(arrList);
    expect(console.log.mock.calls[9][0]).toEqual(`|ID|Name   |Age|
|--|-------|---|
|1 |Alice  |25 |
|2 |Bob    |30 |
|3 |Charlie|35 |
`);

    Printer.printAsTable(arrList);
    expect(console.log.mock.calls[10][0]).toEqual(`ID  Name     Age  
1   Alice    25   
2   Bob      30   
3   Charlie  35   `);

    // Call the Renderer methods with the mock data & expect to return with the expected outputs
    expect(Renderer.toDelimitedTable(arrList, ',')).toEqual(`ID,Name,Age
1,Alice,25
2,Bob,30
3,Charlie,35`);

    expect(Renderer.toDelimitedTable(arrList, '\t')).toEqual(`ID	Name	Age
1	Alice	25
2	Bob	30
3	Charlie	35`);

    expect(Renderer.toDelimitedTable(arrList, '|')).toEqual(`ID|Name|Age
1|Alice|25
2|Bob|30
3|Charlie|35`);

    expect(Renderer.toHTML(arrList, true)).toEqual(`<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Charlie</td>
      <td>35</td>
    </tr>
  </tbody>
</table>`);

    expect(Renderer.toHTML(arrList, false)).toEqual(
      `<table><thead><tr><th>ID</th><th>Name</th><th>Age</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>25</td></tr><tr><td>2</td><td>Bob</td><td>30</td></tr><tr><td>3</td><td>Charlie</td><td>35</td></tr></tbody></table>`
    );

    expect(Renderer.toMarkdown(arrList)).toEqual(`|ID|Name   |Age|
|--|-------|---|
|1 |Alice  |25 |
|2 |Bob    |30 |
|3 |Charlie|35 |
`);

    expect(Renderer.toTable(arrList)).toEqual(`ID  Name     Age  
1   Alice    25   
2   Bob      30   
3   Charlie  35   `);
  });
});
