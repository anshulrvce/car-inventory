
/**
 * Define Database
 *
 */

 import mongoose from 'mongoose';
 // import winston from 'winston';

 
 export class Database {
   // Initialize your database
   public static async init (): Promise<void> {
    // read the db connection url from env variable
     const connectionUrl = process.env.MONGOOSE_URL|| 'mongodb://127.0.0.1:27017/cars';  
     try{
     await mongoose.connect(connectionUrl);
     } catch(e)  {
       // handle the error case
        //  Log.info('Failed to connect to the Mongo server!!');
         console.log(e);
         throw e;
       } 
   }
 }
 
 export default mongoose;