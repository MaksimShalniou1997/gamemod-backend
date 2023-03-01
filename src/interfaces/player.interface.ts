export interface Player {
	_id: string;
	nickname: string;
	score: number;
	state: number;
	statistic: {
		totalKills: number;
		death: number;
	};
}

export interface ILeaderboard {
	winners: Array<Player>;
	losers: Array<Player>;
}
