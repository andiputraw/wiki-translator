import fs from "fs";
import Fetch_Puppteer from "../Puppeteer/Fetch_Puppeteer";
import { filterContent, makeArray } from "../Handlers/TranslateHandler";
import FileSystemHandler from "../Handlers/fileSystemHandler";

export default class FetchData_Service {
  static async fetch() {
    return await Fetch_Puppteer();
  }

  static async main() {
    const content = await FetchData_Service.fetch();
    const originalContent = makeArray(content);
    const TranslationReady = filterContent(content);
    FileSystemHandler.writeTranslate(TranslationReady);
    FileSystemHandler.writeOriginal(originalContent);

    console.log("Selesai");
  }
}
