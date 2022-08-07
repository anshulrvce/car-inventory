import { json, Application } from 'express';
import { carRouter } from './routes/cars';
import { errorHandler } from './middleware/errorHandler';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/car-swagger.json';

const options = {
	explorer: true
};


// initialize the routes for application
export function initRoutes(app: Application) {
	app.use(json());
	app.use('/api', carRouter);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
	app.use(errorHandler);
}

