import {Request, Response, NextFunction} from 'express';
import Ajv from 'ajv'

class ValidationMiddleware {
	validateRequest(schema: any) {
		return function(
			req: Request,
			res: Response,
			next: NextFunction
		) {
			const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
			try{
				const validate = ajv.compile(schema)
				if (validate(req.body)) {
					next();
				} else {
					res.status(400).send(validate.errors);
				}
			} catch(e){
				next(e)
			}
		}
	}
}

export default new ValidationMiddleware();
