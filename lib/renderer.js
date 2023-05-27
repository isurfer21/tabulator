export default class Renderer {
  static toDelimitedTable(arrList, separator) {
    let lines = [],
      pattern = new RegExp(`/[ ${separator}]/`);
    for (let row of arrList) {
      let newRow = row.map(item => {
        if (pattern.test(item)) {
          return `"${item}"`;
        } else {
          return item;
        }
      });
      lines.push(newRow.join(separator));
    }
    return lines.join('\n');
  }

  static toHTML(arrList, isFormatted) {
    if (isFormatted) {
      let [headerRow, ...bodyRows] = arrList;
      let html = '<table>\n';
      html += '  <thead>\n    <tr>\n';
      html += headerRow.map(item => `      <th>${item}</th>`).join('\n');
      html += '\n    </tr>\n  </thead>\n';
      html += '  <tbody>\n';
      html += bodyRows
        .map(row => {
          let rowHtml = '    <tr>\n';
          rowHtml += row.map(item => `      <td>${item}</td>`).join('\n');
          rowHtml += '\n    </tr>';
          return rowHtml;
        })
        .join('\n');
      html += '\n  </tbody>\n';
      html += '</table>';
      return html;
    } else {
      let [headerRow, ...bodyRows] = arrList;
      let html = '<table>';
      html += '<thead><tr>';
      html += headerRow.map(item => `<th>${item}</th>`).join('');
      html += '</tr></thead>';
      html += '<tbody>';
      html += bodyRows
        .map(row => {
          let rowHtml = '<tr>';
          rowHtml += row.map(item => `<td>${item}</td>`).join('');
          rowHtml += '</tr>';
          return rowHtml;
        })
        .join('');
      html += '</tbody>';
      html += '</table>';
      return html;
    }
  }

  static toMarkdown(arrList) {
    let columnWidths = new Array(arrList[0].length).fill(0);
    for (let row of arrList) {
      for (let i = 0; i < row.length; i++) {
        columnWidths[i] = Math.max(columnWidths[i], String(row[i]).length);
      }
    }
    let tableString = '';
    // add header row
    for (let i = 0; i < arrList[0].length; i++) {
      tableString += '|' + String(arrList[0][i]).padEnd(columnWidths[i]);
    }
    tableString += '|\n';
    // add separator row
    for (let i = 0; i < arrList[0].length; i++) {
      tableString += '|' + '-'.repeat(columnWidths[i]);
    }
    tableString += '|\n';
    // add data rows
    for (let j = 1; j < arrList.length; j++) {
      let row = arrList[j];
      for (let i = 0; i < row.length; i++) {
        tableString += '|' + String(row[i]).padEnd(columnWidths[i]);
      }
      tableString += '|\n';
    }
    return tableString;
  }

  static toTable(arrList) {
    let columnWidths = new Array(arrList[0].length).fill(0);
    for (let row of arrList) {
      for (let i = 0; i < row.length; i++) {
        columnWidths[i] = Math.max(columnWidths[i], String(row[i]).length);
      }
    }
    let lines = [];
    for (let row of arrList) {
      let rowString = '';
      for (let i = 0; i < row.length; i++) {
        rowString += String(row[i]).padEnd(columnWidths[i] + 2);
      }
      lines.push(rowString);
    }
    return lines.join('\n');
  }
}
