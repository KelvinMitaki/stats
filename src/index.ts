import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./matchResult";
import { MatchData, MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { HTMLReport } from "./reportTargets/HTMLReport";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winsAnalysis = new WinsAnalysis("Chelsea");
new ConsoleReport();
const summary = new Summary(winsAnalysis, new HTMLReport("chelsea"));
summary.buildAndPrintReport(matchReader.matches);
