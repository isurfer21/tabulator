export default class Sifter {
  static toArrayList(columns, rows) {
    let columnIds = Object.keys(columns);
    let columnTitles = Object.values(columns);
    let result = [columnTitles];
    for (let row of rows) {
      let rowValues = [];
      for (let columnId of columnIds) {
        rowValues.push(row[columnId]);
      }
      result.push(rowValues);
    }
    return result;
  }

  static toObjectList(columns, rows) {
    let columnIds = Object.keys(columns);
    let result = rows.map(row => {
      let rowObj = {};
      for (let columnId of columnIds) {
        let columnTitle = columns[columnId];
        rowObj[columnTitle] = row[columnId];
      }
      return rowObj;
    });
    return result;
  }
}
