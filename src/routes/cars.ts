import { Router } from 'express';
import CarController  from '../controllers/car-controller'
import ValidationMiddleware from '../middleware/validator'
import swaggerDocument from'../swagger/car-swagger.json';


export const carRouter = Router();

// read request schema from swagger

// schema for new car entry
const createCarSchema = swaggerDocument.components.schemas.Car

// schema for update car
const updateCarSchema = swaggerDocument.components.schemas.UpdateCarRequest

// initialize routes
carRouter.post('/cars',ValidationMiddleware.validateRequest(createCarSchema), CarController.addNewCar)
carRouter.get('/cars', CarController.getAllCars)
carRouter.get('/cars/:carId', CarController.getCarById)
carRouter.delete('/cars/:carId', CarController.deleteCar)
carRouter.put('/cars/:carId',ValidationMiddleware.validateRequest(updateCarSchema),  CarController.updateCar)

