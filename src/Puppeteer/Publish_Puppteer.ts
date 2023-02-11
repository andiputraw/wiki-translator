import puppeteer from "puppeteer";
import Config from "../Handlers/Config";

export default async function Publish_Puppteer(
  content: string,
  summary: string = ""
) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1024 });

  await page.goto(`${Config.url}/id?action=edit`);
  await Promise.all([page.click("#pt-login a"), page.waitForNavigation()]);

  await page.type("#wpName1", Config.username);
  await page.type("#wpPassword1", Config.password);
  await Promise.all([page.click("#wpLoginAttempt"), page.waitForNavigation()]);
  await page.goto(`${Config.url}/id?action=edit`);

  await page.evaluate(() => {
    const textBox = document.querySelector("#wpTextbox1") as HTMLInputElement;
    textBox.value = content;
  });
  await page.type("#wpSummary", summary);

  await Promise.all([page.click("#wpPreview"), page.waitForNavigation()]);
  await page.screenshot({
    type: "png",
    fullPage: true,
    path: "translation/preview.png",
  });

  // await Promise.all([page.click("#wpSave"), page.waitForNavigation()]);

  browser.close();
}
