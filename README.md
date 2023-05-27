# tabulator

> A library to transform and show tables in different formats.

![Build passing](https://img.shields.io/badge/build-passing-green)
![Tests 20 passed](https://img.shields.io/badge/tests-20_passed-green)
![License MIT](https://img.shields.io/badge/license-MIT-blue) 

The `tabulator` library contains three modules: 

- [Sifter](#sifter)
- [Printer](#printer)
- [Renderer](#renderer)

These modules can be used to manipulate and display data in various supported formats.

## Sifter

Sifter is a module that provides two static methods to convert between an object list and an array list.

- `toArrayList(columns, rows)` takes an object that maps column ids to column titles and an array of objects that represent rows of data. It returns an array of arrays that contains the column titles as the first row and the row values as the subsequent rows.
- `toObjectList(columns, rows)` takes an object that maps column ids to column titles and an array of arrays that contains the row values. It returns an array of objects that represent rows of data with the column titles as the keys.

## Printer

Printer is a module that provides a static method to print an object list as a table in various formats.

- `printAsJSON(objList)` takes an array of objects that represent rows of data and prints it as a JSON string.
- `printAsYAML(objList)` takes an array of objects that represent rows of data and prints it as a YAML string.
- `printAsTOML(objList)` takes an array of objects that represent rows of data and prints it as a TOML string.
- `printAsASCII(objList)` takes an array of objects that represent rows of data and prints it as an ASCII table using the `console.table` method.
- `printAsCSV(arrList)` takes an array of arrays that contains the row values and prints it as a CSV string.
- `printAsTSV(arrList)` takes an array of arrays that contains the row values and prints it as a TSV string.
- `printAsPSV(arrList)` takes an array of arrays that contains the row values and prints it as a PSV string.
- `printAsHTML(arrList, isFormatted)` takes an array of arrays that contains the row values and a boolean flag for formatting. It prints it as an HTML table string. If the flag is true, it adds line breaks and spaces for readability. If the flag is false, it removes them for compactness.
- `printAsMarkdown(arrList)` takes an array of arrays that contains the row values and prints it as a Markdown table string.
- `printAsTable(arrList)` takes an array of arrays that contains the row values and prints it as a plain text table.

## Renderer

Renderer is a module that provides static methods to create table strings from an array list in various formats.

- `toDelimitedTable(arrList, separator)` takes an array of arrays that contains the row values and a separator character. It returns a delimited table string using the separator. It also adds double quotes around any value that contains the separator.
- `toHTML(arrList, isFormatted)` takes an array of arrays that contains the row values and a boolean flag for formatting. It returns an HTML table string. If the flag is true, it adds line breaks and spaces for readability. If the flag is false, it removes them for compactness.
- `toMarkdown(arrList)` takes an array of arrays that contains the row values and returns a Markdown table string.
- `toTable(arrList)` takes an array of arrays that contains the row values and returns a plain text table string.

## Installation

To install these modules, run:

```sh
npm install tabulator
```

## Usage

To use these modules, import them in your node.js project:

```js
import { Sifter } from 'tabulator';
import { Printer } from 'tabulator';
import { Renderer } from 'tabulator';
```

Then you can call their methods with your data:

```js
// Define some mock data for testing
const columns = { id: 'ID', name: 'Name', age: 'Age' };
const rows = [
 { id: 1, name: 'Alice', age: 25 },
 { id: 2, name: 'Bob', age: 30 },
 { id: 3, name: 'Charlie', age: 35 }
];

// Convert the object list to an array list using Sifter
const arrList = Sifter.toArrayList(columns, rows);

// Print the array list as a CSV string using Printer
Printer.printAsCSV(arrList);

// Create a PSV table string from the array list using Renderer
const psvOutput = Renderer.toDelimitedTable(arrList, '|');
```