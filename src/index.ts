import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./matchResult";
import { MatchData, MatchReader } from "./MatchReader";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let manUWins = 0;

matchReader.matches.forEach((match: MatchData): void => {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    manUWins++;
  }
});

console.log(`man u has won ${manUWins} times`);
