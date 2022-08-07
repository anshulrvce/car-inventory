import {  NextFunction, Request , Response} from "express";
import Car from '../models/car';
import logger from "../utils/logger";


class CarController {
	/**
   * get metadata for all cars in inventory
   * @param req 
   * @param res 
   */
	public static async getAllCars(req: Request, res: Response): Promise<any> {
		// return only metadata of all cars
		const cars = await Car.find({}, {brand:1, model:1, color:1});
		res.send(cars)
	}

	/**
   * add a new car to the inventory
   * @param req 
   * @param res 
   */
	public static async addNewCar(req: Request, res: Response,  next: NextFunction): Promise<any> {
		// create a new car object using schema
		const car  = new Car(req.body);
		try{
			// save the car object to the database
			await car.save();
			res.sendStatus(201)
		} catch(e){
			logger.error(e)
			next(e);
		}
	}
	/**
   * get details of a car by id
   * @param req 
   * @param res 
   */
	public static async getCarById(req: Request, res: Response, next: NextFunction): Promise<any> {
		let carDetails;
		try{
			carDetails = await Car.findOne({_id: req.params.carId});
		} catch(e){
			logger.error(e)
			next(e)
		}
		if(carDetails === null){
			const error  =  new Error('No car found with provided id');
			res.status(404).send(error)
		}
		res.send(carDetails)
	}
	/**
   * delete a car from inventory
   * @param req 
   * @param res 
   */
	public static async deleteCar(req: Request, res: Response): Promise<any> {
		// delete a single car by _id 
		await Car.deleteOne({_id: req.params.carId});

		res.sendStatus(204)

	}
	/**
   * update details of a specific car
   * @param req 
   */
	public static async updateCar(req: Request,  res: Response): Promise< any> {
		// search car by _id and update car details 
		await Car.findByIdAndUpdate({_id: req.params.carId}, req.body)
		res.sendStatus(200)

	}
}

export default CarController