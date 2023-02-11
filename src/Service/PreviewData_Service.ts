import Preview_Puppteer from "../Puppeteer/Preview_Puppeter";
import fs from "fs";
import { TranslationObject } from "../interfaces";
import { createContent } from "../Handlers/TranslateHandler";
import FileSystemHandler from "../Handlers/fileSystemHandler";

export default class PreviewData_Service {
  static async main() {
    const content = FileSystemHandler.readTranslate() as TranslationObject[];
    const originalContent = FileSystemHandler.readOriginal() as string[];

    const translated = createContent(content, originalContent);

    await Preview_Puppteer(translated);

    console.log("selesai, lihat translation/preview.png");
  }
}
