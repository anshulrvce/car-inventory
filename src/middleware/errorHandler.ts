import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

/**
 * Middleware which will be declared at the end of all routes, this will globally handle any 500 errors which need
 * to be logged.
 * @param error
 * @param req
 * @param res
 */
export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
	logger.error(error.message, error);
	res.status(500).send('Something failed');
}
