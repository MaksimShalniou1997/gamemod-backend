import { Player, ILeaderboard } from '../interfaces/player.interface';
import playerModel from '../models/player.model';

class PlayerService {
	public player = playerModel;

	public async findAllPlayers(): Promise<ILeaderboard> {
		const players: Player[] = await this.player.find();
		const leaderboard = players.reduce(
			(acc, val, index) => {
				if (index % 2 === 0) {
					acc = { ...acc, winners: [...acc.winners, val] };
				} else {
					acc = { ...acc, losers: [...acc.losers, val] };
				}
				return acc;
			},
			{ winners: [], losers: [] }
		);
		return leaderboard;
	}
}

export default PlayerService;
