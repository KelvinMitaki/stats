import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./matchResult";
import { MatchData, MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const teamWins = new WinsAnalysis("Chelsea");
console.log(teamWins.run(matchReader.matches));
