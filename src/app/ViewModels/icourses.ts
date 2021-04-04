import { from } from "rxjs";
import { Iinstructor } from './iinstructor'
export interface Icourses {
    id?:number,
    name:string,
    description:string,
    cover:string,
    price:number,
    instructor:Iinstructor[]
}
