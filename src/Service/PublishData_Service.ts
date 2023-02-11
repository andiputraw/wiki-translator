import Publish_Puppteer from "../Puppeteer/Publish_Puppteer";
import FileSystemHandler from "../Handlers/fileSystemHandler";
import { TranslationObject } from "../interfaces";
import Config from "../Handlers/Config";
import { createContent } from "../Handlers/TranslateHandler";

export default class PublishData_Service {
  static async main(summary: string) {
    const content = FileSystemHandler.readTranslate() as TranslationObject[];
    const originalContent = FileSystemHandler.readOriginal() as string[];

    const translated = createContent(content, originalContent);

    await Publish_Puppteer(translated, summary);

    console.log(`selesai, link: ${Config.url}/id`);
  }
}
