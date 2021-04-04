
import { ISpeaker } from "./ispeaker";

export interface IEvent {
    id?:number
    year:string
    location:string
    date:string
    title:string
    cover:string
    description:string
    speakers:ISpeaker[]

}

