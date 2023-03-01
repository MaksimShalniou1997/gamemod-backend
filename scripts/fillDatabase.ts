import { dbConnect, dbDisconnect } from './utils';
import config from '../src/config';
import playerModel from '../src/models/player.model';

const { mongoConnectionUrl } = config;

const NUMBER_OF_PLAYERS = 100;

const generatePlayers = () =>
	Array.from(Array(NUMBER_OF_PLAYERS), (_, index) => ({
		nickname: `nickname${index}`,
		score: Math.floor(Math.random() * 100),
		state: index % 2 === 0 ? 'dead' : 'alive',
		statistic: {
			totalKills: Math.floor(Math.random() * 20),
			death: Math.floor(Math.random() * 20),
		},
	}));

const run = async () => {
	try {
		await dbConnect(mongoConnectionUrl);

		console.log('connected');
		await playerModel.create(generatePlayers());
		console.log('players were addded');

		await dbDisconnect();
		console.log('finished');
	} catch (error) {
		console.log(`Error when refunding orders ${error.message}`);
	}
};

run();
