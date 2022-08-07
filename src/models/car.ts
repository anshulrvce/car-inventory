
import { ICar } from '../interfaces/car';
import mongoose from '../services/database';
 

 // Define the Car Schema
 export const CarSchema = new mongoose.Schema<ICar>({
   model: { type: String, required: true },
   brand: { type: String, required: true },
   year: { type: Number, required: true  },
   color: { type: String, required: true  },
   seatingCapacity: { type: Number, required: true  },
 });
 

 
 const Car = mongoose.model<ICar>('Cars', CarSchema);

 
 
 export default Car;
 