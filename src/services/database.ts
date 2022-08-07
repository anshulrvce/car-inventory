
/**
 * Define Database
 *
 */

import mongoose from 'mongoose';
import logger from '../utils/logger';

// class for mongo database connection config
export class Database {
	// Initialize your database
	public static async init (): Promise<void> {
		// read the db connection url from env variable
		const connectionUrl = process.env.MONGOOSE_URL|| 'mongodb://127.0.0.1:27017/car_inventory';  
		try{
			await mongoose.connect(connectionUrl);
			logger.info('connected to mongo server')
		} catch(e)  {
			// handle the error case
			logger.error('Failed to connect to the Mongo server!!',e);
			throw e;
		} 
	}
}
 
export default mongoose;