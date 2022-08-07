
/**
 * Define interface for car Metadata
 */
export interface CarMetaData {
  brand: string;
  model: string;
  year: number;
}

/**
 * Define interface for Car Model
 */
 export interface ICar extends CarMetaData{
  color: string;
  seatingCapacity: number;
}

export interface ICarDB  extends ICar {
  _id: string
}


export default ICar;
