import {Request, Response, NextFunction} from 'express';
import Ajv from 'ajv'

class ValidationMiddleware {
   validateRequest(schema: any) {
    console.log(schema);
    return function(
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
      try{
      const validate = ajv.compile(schema)
  
      console.log(validate({"abc":"xyz"}))
      if (validate(req.body)) {
          next();
      } else {
        console.log(validate.errors)
          res.status(400).send(validate.errors);
      }
    } catch(e){
    console.log(e)
  }
}
  }
}

export default new ValidationMiddleware();
