import express from 'express';

// startup
// import { initLogger } from './utils/logger';
import * as dotenv from 'dotenv';
import { initRoutes } from './routes';
import { Database } from './services/database';
import path from 'path';

// Loads your dotenv file
	dotenv.config({ path: path.join(__dirname, '../.env') });
  
/**
 * Create Express instance
 */
const app = express();

/**
 * Enable logging
 */
// initLogger();

/**
 * Initialise app routes
 */
initRoutes(app);

/**
 * Connect to database
 */
 Database.init();

/**
 * Start Express server.
 */
const port = process.env.PORT || 8080;

export const server = app.listen(port, () => {
    console.log(
        `  App is running at http://localhost:${port} in %s mode`,
        app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
});


export default app;

