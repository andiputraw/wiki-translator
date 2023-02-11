import FileSystemHandler from "../Handlers/fileSystemHandler";

export default class Utility_Service {
  static replaceUrl() {
    let content = FileSystemHandler.readTranslate();

    content.forEach((obj) => {
      obj.translatedText = Utility_Service.regexForUrl(obj.translatedText);
    });

    FileSystemHandler.writeTranslate(content);
  }
  private static regexForUrl(string: string) {
    let pattern = /\[\[([^\]]+)\]\]/g;
    let output = string.replace(pattern, "[[$1/id|$1]]");

    return output;
  }
}
