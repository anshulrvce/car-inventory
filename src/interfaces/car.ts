
/**
 * Define interface for car Metadata
 */
export interface CarMetaData {
  brand: string;
  modelName: string;
  modelYear: number;
}

/**
 * Define interface for Car Model
 */
export interface ICar extends CarMetaData{
  color: string;
  seatingCapacity: number;
  price: number
}



export default ICar;
