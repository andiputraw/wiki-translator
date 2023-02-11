import inquirer, { Answers } from "inquirer";
import FetchData_Service from "../Service/FetchData_Service";
import PreviewData_Service from "../Service/PreviewData_Service";
import PublishData_Service from "../Service/PublishData_Service";

export default class CLI_Handler {
  static async main() {
    const answer = await inquirer.prompt({
      type: "list",
      name: "value",
      message: "Apa yang mau kamu lakukan?",
      choices: ["Ambil Data", "Lihat Preview", "Publish"],
    });

    CLI_Handler.checkAnswer(answer.value);
  }

  static async confirmation(message: string) {
    const answer = await inquirer.prompt({
      type: "confirm",
      name: "value",
      message: message,
    });

    return answer.value;
  }

  static async input(message: string) {
    const answer = await inquirer.prompt({
      type: "input",
      name: "value",
      message: message,
    });

    return answer.value;
  }

  static async checkAnswer(answer: string) {
    if (answer === "Ambil Data") {
      if (
        await CLI_Handler.confirmation(
          "Apakah Kamu yakin, ini akan menimpa translate.json mu"
        )
      ) {
        FetchData_Service.main();
      }
    } else if (answer === "Lihat Preview") {
      if (
        await CLI_Handler.confirmation(
          "Melakukan ini berarti kamu akan login ke terraria.wiki.gg, apakah kamu yakin?"
        )
      ) {
        PreviewData_Service.main();
      }
    } else if (answer === "Publish") {
      if (
        await CLI_Handler.confirmation(
          "Melakukan ini berarti kamu akan mempublish hasil terjemahanmu ke terraria.wiki.gg, cek sekali lagi sebelum di rilis"
        )
      ) {
        const summary = await CLI_Handler.input(
          "Inputkan Summary (biarkan kosong jika tidak ada)"
        );
        PublishData_Service.main(summary);
      }
    }
  }
}
