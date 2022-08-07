
import { ICar } from '../interfaces/car';
import mongoose from '../services/database';
 

 // Define the Car Schema
 export const CarSchema = new mongoose.Schema<ICar>({
   modelName: { type: String, required: true },
   brand: { type: String, required: true },
   modelYear: { type: Number, required: true, max: new Date().getFullYear()   },
   color: { type: String, required: true  },
   seatingCapacity: { type: Number, required: true , min: 2, max: 10 },
   price: { type: Number, required: true  },
 });

 // create unique index for car metadata properties
 CarSchema.index({ brand: 1, modelName: 1, modelYear: 1  }, { unique: true })
 
 // create model from schema
 const Car = mongoose.model<ICar>('Cars', CarSchema);

 
 
 export default Car;
 