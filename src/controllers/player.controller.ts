import { NextFunction, Response } from 'express';
import { ILeaderboard } from '../interfaces/player.interface';
import PlayerService from '../services/player.service';

class PlayerController {
	public playerService = new PlayerService();

	public getPlayers = async (_, res: Response, next: NextFunction) => {
		try {
			const findAllPlayersData: ILeaderboard = await this.playerService.findAllPlayers();

			res.status(200).json({ data: findAllPlayersData, message: 'findAll' });
		} catch (error) {
			next(error);
		}
	};
}

export default PlayerController;
