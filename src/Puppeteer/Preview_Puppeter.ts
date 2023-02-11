import puppeteer from "puppeteer";
import Config from "../Handlers/Config";

export default async function Preview_Puppteer(content: string) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1024 });

  await page.goto(`${Config.url}/id`);

  await Promise.all([page.click("#pt-login a"), page.waitForNavigation()]);

  await page.type("#wpName1", Config.username);
  await page.type("#wpPassword1", Config.password);
  await Promise.all([page.click("#wpLoginAttempt"), page.waitForNavigation()]);
  await page.goto(`${Config.url}/id?action=edit`);
  await page.type("#wpTextbox1", content);
  await Promise.all([page.click("#wpPreview"), page.waitForNavigation()]);
  await page.screenshot({
    type: "png",
    fullPage: true,
    path: "translation/preview.png",
  });

  browser.close();
}
