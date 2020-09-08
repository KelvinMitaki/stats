import { CSVFileReader, MatchData } from "./CSVFileReader";
import { MatchResult } from "./matchResult";

const reader = new CSVFileReader("football.csv");
reader.read();
let manUWins = 0;

reader.data.forEach((match: MatchData): void => {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    manUWins++;
  }
});

console.log(`man u has won ${manUWins} times`);
