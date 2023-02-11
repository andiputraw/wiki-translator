import fs from "fs";

interface Config {
  url: string;
  username: string;
  password: string;
}

const Config = JSON.parse(
  fs.readFileSync("translation/config.json").toString()
) as Config;

export default Config;
