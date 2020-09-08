import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./matchResult";
import { MatchData, MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const teamWins = new WinsAnalysis("Chelsea");
const consoleReport = new ConsoleReport();
consoleReport.print(teamWins.run(matchReader.matches));
