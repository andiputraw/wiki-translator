import fs from "fs";

import { TranslationObject } from "../interfaces";

export default class FileSystemHandler {
  static writeTranslate(content: TranslationObject[]) {
    fs.writeFileSync(
      "translation/translate.json",
      JSON.stringify(content, null, 3)
    );
  }
  static readTranslate() {
    return JSON.parse(
      fs.readFileSync("translation/translate.json").toString()
    ) as TranslationObject[];
  }
  static writeOriginal(content: string[]) {
    fs.writeFileSync("data/original.txt", JSON.stringify(content));
  }
  static readOriginal() {
    return JSON.parse(
      fs.readFileSync("data/original.txt").toString()
    ) as string[];
  }
}
