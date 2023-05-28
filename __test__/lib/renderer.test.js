import { describe, expect, test } from '@jest/globals';

// Import the Renderer class
import Renderer from '../../lib/renderer.js';

// Define some mock data for testing
const arrList = [
  ['Name', 'Age', 'City'],
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

// Define the expected results for testing
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

// Write the jest tests for the Renderer class
describe('Renderer class', () => {
  // Test the toDelimitedTable method
  test('toDelimitedTable should create a delimited table string from an array list and a separator', () => {
    // Expect the method to return the expected csvOutput with comma separator
    expect(Renderer.toDelimitedTable(arrList, ',')).toBe(csvOutput);
    // Expect the method to return the expected tsvOutput with tab separator
    expect(Renderer.toDelimitedTable(arrList, '\t')).toBe(tsvOutput);
    // Expect the method to return the expected psvOutput with pipe separator
    expect(Renderer.toDelimitedTable(arrList, '|')).toBe(psvOutput);
  });

  // Test the toHTML method for formatted output
  test('toHTML should create a formatted HTML table string from an array list', () => {
    // Expect the method to return the expected htmlOutput with true flag for formatting
    expect(Renderer.toHTML(arrList, true)).toBe(htmlOutput);
  });

  // Test the toHTML method for unformatted output
  test('toHTML should create an unformatted HTML table string from an array list', () => {
    // Expect the method to return a minified version of htmlOutput with false flag for formatting
    expect(Renderer.toHTML(arrList, false)).toBe(htmlRawOutput);
  });

  // Test the toMarkdown method
  test('toMarkdown should create a Markdown table string from an array list', () => {
    // Expect the method to return the expected markdownOutput
    expect(Renderer.toMarkdown(arrList)).toBe(markdownOutput);
  });

  // Test the toTable method
  test('toTable should create a plain text table string from an array list', () => {
    // Expect the method to return the expected tableOutput
    expect(Renderer.toTable(arrList)).toBe(tableOutput);
  });
});
