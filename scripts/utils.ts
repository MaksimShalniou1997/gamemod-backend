import mongoose from 'mongoose';

export const dbConnect = async (mongoUrl: string) => {
	console.log('Connecting to the database...');

	const connection = await mongoose.connect(mongoUrl);

	return connection;
};

export const dbDisconnect = async () => {
	console.log('Disconnecting from the database..');

	await mongoose.connection.close();
};
