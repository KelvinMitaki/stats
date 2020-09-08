import { OutputTarget } from "../Summary";
import { writeFileSync } from "fs";

export class HTMLReport implements OutputTarget {
  constructor(public fileName: string) {}
  print(report: string): void {
    writeFileSync(
      `${this.fileName}.html`,
      `<div><h1>Team Analysis Report</h1>
    <p>${report}</p>
    </div>`
    );
  }
}
