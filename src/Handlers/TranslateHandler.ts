import fs from "fs";
import { TranslationObject } from "../interfaces";

interface rawTranslationObject {
  index: number;
  content: string;
}

export function makeArray(str: string): string[] {
  return str.split("\n");
}

function removeTable(originalArray: string[]) {
  const rawTranslationObject: rawTranslationObject[] = [];
  originalArray.forEach((string, index) => {
    if (
      !string.startsWith("{{") &&
      !string.startsWith("|") &&
      !string.startsWith("--") &&
      !string.startsWith("  |") &&
      !string.startsWith("</Tabber>") &&
      !string.startsWith("}}")
    ) {
      rawTranslationObject.push({ index: index, content: string });
    }
  });

  return rawTranslationObject;
}

export function filterContent(content: string) {
  const filteredContent: TranslationObject[] = [];

  removeTable(makeArray(content)).forEach((contentObj) => {
    if (
      !contentObj.content.startsWith("==") &&
      !contentObj.content.startsWith("[[") &&
      contentObj.content !== ""
    ) {
      filteredContent.push({
        indexOfOriginalArray: contentObj.index,
        originalText: contentObj.content,
        translatedText: contentObj.content,
      });
    }
  });
  return filteredContent;
}

function joinArray(arr: string[]) {
  return arr.join("\n");
}

export function createContent(
  translatedContentObjects: TranslationObject[],
  originalArray: string[]
) {
  translatedContentObjects.forEach((translatedContentObject) => {
    originalArray[translatedContentObject.indexOfOriginalArray] =
      translatedContentObject.translatedText;
  });

  return joinArray(originalArray);
}
