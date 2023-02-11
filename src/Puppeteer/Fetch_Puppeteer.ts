import puppeteer from "puppeteer";
import Config from "../Handlers/Config";

export default async function Fetch_Puppeteer() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(`${Config.url}?action=edit`);

  const content = await page.$eval("#wpTextbox1", (el) => {
    return el.textContent;
  });

  if (content === null) {
    throw Error("Editor box is not exists");
  }

  await browser.close();

  return content;
}
