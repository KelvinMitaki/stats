import fs from "fs";
import { CSVFileReader } from "./CSVFileReader";

const reader = new CSVFileReader("football.csv");
reader.read();
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

let manUWins = 0;

reader.data.forEach((match: string[]): void => {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    manUWins++;
  }
});

console.log(`man u has won ${manUWins} times`);
