import YAML from 'yaml';
import TOML from '@ltd/j-toml';
import Renderer from './renderer.js';

export default class Printer {
  static printAsJSON(objList) {
    console.log(JSON.stringify(objList, null, 2));
  }

  static printAsYAML(objList) {
    console.log(YAML.stringify(objList));
  }

  static printAsTOML(objList) {
    console.log(TOML.stringify(objList));
  }

  static printAsASCII(objList) {
    console.table(objList);
  }

  static printAsCSV(arrList) {
    console.log(Renderer.toDelimitedTable(arrList, ','));
  }

  static printAsTSV(arrList) {
    console.log(Renderer.toDelimitedTable(arrList, '\t'));
  }

  static printAsPSV(arrList) {
    console.log(Renderer.toDelimitedTable(arrList, '|'));
  }

  static printAsHTML(arrList, isFormatted) {
    console.log(Renderer.toHTML(arrList, isFormatted));
  }

  static printAsMarkdown(arrList) {
    console.log(Renderer.toMarkdown(arrList));
  }

  static printAsTable(arrList) {
    console.log(Renderer.toTable(arrList));
  }
}
