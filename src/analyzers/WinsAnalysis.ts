import { Analyzer } from "../Summary";
import { MatchData } from "../MatchReader";
import { MatchResult } from "../matchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    matches.forEach((match: MatchData): void => {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    });
    return `Team ${this.team} has won ${wins} games`;
  }
}
