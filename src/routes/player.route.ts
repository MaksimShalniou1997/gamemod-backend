import { Router } from 'express';
import PlayerController from '../controllers/player.controller';
import { Routes } from '../interfaces/routes.interface';

class PlayerRoute implements Routes {
	public path = '/players';

	public router = Router();

	public playerController = new PlayerController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, this.playerController.getPlayers);
	}
}

export default PlayerRoute;
