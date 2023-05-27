import { describe, expect, test } from '@jest/globals';

// Import the Printer class and the dependencies
import Printer from '../../lib/printer';
import YAML from 'yaml';
import TOML from '@ltd/j-toml';

// Define some mock data for testing
const objList = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' }
];

const arrList = [
  ['Name', 'Age', 'City'],
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

// Define the expected results for testing
const jsonOutput = JSON.stringify(objList, null, 2);
const yamlOutput = YAML.stringify(objList);
const tomlOutput = TOML.stringify(objList);
const asciiOutput = `┌─────────┬───────────┬─────┬───────────────┐
│ (index) │   name    │ age │     city      │
├─────────┼───────────┼─────┼───────────────┤
│    0    │  'Alice'  │ 25  │  'New York'   │
│    1    │   'Bob'   │ 30  │ 'Los Angeles' │
│    2    │ 'Charlie' │ 35  │   'Chicago'   │
└─────────┴───────────┴─────┴───────────────┘`;
const csvOutput = `Name,Age,City
Alice,25,New York
Bob,30,Los Angeles
Charlie,35,Chicago`;
const tsvOutput = `Name\tAge\tCity
Alice\t25\tNew York
Bob\t30\tLos Angeles
Charlie\t35\tChicago`;
const psvOutput = `Name|Age|City
Alice|25|New York
Bob|30|Los Angeles
Charlie|35|Chicago`;
const htmlOutput = `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>35</td>
      <td>Chicago</td>
    </tr>
  </tbody>
</table>`;
const htmlRawOutput = "<table><thead><tr><th>Name</th><th>Age</th><th>City</th></tr></thead><tbody><tr><td>Alice</td><td>25</td><td>New York</td></tr><tr><td>Bob</td><td>30</td><td>Los Angeles</td></tr><tr><td>Charlie</td><td>35</td><td>Chicago</td></tr></tbody></table>";
const markdownOutput = `|Name   |Age|City       |
|-------|---|-----------|
|Alice  |25 |New York   |
|Bob    |30 |Los Angeles|
|Charlie|35 |Chicago    |
`;
const tableOutput = `Name     Age  City         
Alice    25   New York     
Bob      30   Los Angeles  
Charlie  35   Chicago      `;

// Write the jest tests for the Printer class
describe('Printer class', () => {
  // Test the printAsJSON method
  test('printAsJSON should print the object list as a JSON string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsJSON(objList);
    // Expect the console.log to be called with the expected jsonOutput
    expect(console.log).toHaveBeenCalledWith(jsonOutput);
  });

  // Test the printAsYAML method
  test('printAsYAML should print the object list as a YAML string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsYAML(objList);
    // Expect the console.log to be called with the expected yamlOutput
    expect(console.log).toHaveBeenCalledWith(yamlOutput);
  });

  // Test the printAsTOML method
  test('printAsTOML should print the object list as a TOML string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsTOML(objList);
    // Expect the console.log to be called with the expected tomlOutput
    expect(console.log).toHaveBeenCalledWith(tomlOutput);
  });

  // Test the printAsASCII method
  test('printAsASCII should print the object list as an ASCII table', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsASCII(objList);
    // Expect the console.log to be called with the expected asciiOutput
    expect(console.log).toHaveBeenCalledWith(asciiOutput);
  });

  // Test the printAsCSV method
  test('printAsCSV should print the array list as a CSV string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsCSV(arrList);
    // Expect the console.log to be called with the expected csvOutput
    expect(console.log).toHaveBeenCalledWith(csvOutput);
  });

  // Test the printAsTSV method
  test('printAsTSV should print the array list as a TSV string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsTSV(arrList);
    // Expect the console.log to be called with the expected tsvOutput
    expect(console.log).toHaveBeenCalledWith(tsvOutput);
  });

  // Test the printAsPSV method
  test('printAsPSV should print the array list as a PSV string', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsPSV(arrList);
    // Expect the console.log to be called with the expected psvOutput
    expect(console.log).toHaveBeenCalledWith(psvOutput);
  });

  // Test the printAsHTML method for formatted output
  test('printAsHTML should print the array list as a formatted HTML table', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data and true flag for formatting
    Printer.printAsHTML(arrList, true);
    // Expect the console.log to be called with the expected htmlOutput
    expect(console.log).toHaveBeenCalledWith(htmlOutput);
  });

  // Test the printAsHTML method for unformatted output
  test('printAsHTML should print the array list as an unformatted HTML table', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data and false flag for formatting
    Printer.printAsHTML(arrList, false);
    // Expect the console.log to be called with a minified version of htmlOutput
    expect(console.log).toHaveBeenCalledWith(htmlRawOutput);
  });

  // Test the printAsMarkdown method
  test('printAsMarkdown should print the array list as a Markdown table', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsMarkdown(arrList);
    // Expect the console.log to be called with the expected markdownOutput
    expect(console.log).toHaveBeenCalledWith(markdownOutput);
  });

  // Test the printAsTable method
  test('printAsTable should print the array list as a plain text table', () => {
    // Mock the console.log function
    console.log = jest.fn();
    // Call the method with the mock data
    Printer.printAsTable(arrList);
    // Expect the console.log to be called with the expected tableOutput
    expect(console.log).toHaveBeenCalledWith(tableOutput);
  });
});
