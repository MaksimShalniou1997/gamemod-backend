import { dbConnect, dbDisconnect } from './utils';
import config from '../src/config';
import playerModel from '../src/models/player.model';

const { mongoConnectionUrl } = config;

const run = async () => {
	try {
		await dbConnect(mongoConnectionUrl);

		console.log('connected');

		await playerModel.deleteMany({});

		console.log('Players were deleted');

		await dbDisconnect();
		console.log('finished');
	} catch (error) {
		console.log(`Error when refunding orders ${error.message}`);
	}
};

run();
