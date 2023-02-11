import fs from "fs";

export default class FileSystemHandler {
  static writeTranslate(content: string) {
    fs.writeFileSync("translation/translate.json", content);
  }
  static readTranslate() {
    return JSON.parse(fs.readFileSync("translation/translate.json").toString());
  }
  static writeOriginal(content: string) {
    fs.writeFileSync("data/original.txt", content);
  }
  static readOriginal() {
    return JSON.parse(fs.readFileSync("data/original.txt").toString());
  }
}
