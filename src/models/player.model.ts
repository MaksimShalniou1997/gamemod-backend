import { model, Schema, Document } from 'mongoose';
import { Player } from '../interfaces/player.interface';

const playerSchema: Schema = new Schema({
	nickname: {
		type: String,
		required: true,
		unique: true,
	},
	score: {
		type: Number,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	statistic: {
		totalKills: {
			type: Number,
			required: true,
		},
		death: {
			type: Number,
			required: true,
		},
	},
});

const playerModel = model<Player & Document>('Player', playerSchema);

export default playerModel;
