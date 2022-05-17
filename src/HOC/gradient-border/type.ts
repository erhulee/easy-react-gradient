// import { mapCreator } from "./util";

export type borderConfig = {
    width?:string | number;
    colors:string[]; // rgb(123,323,453) 

    radiusWidth?: number | string;
    direction: string;
}

export type borderConfigWithValue = {
    width:string | number;
    colors:string[]; // rgb(123,323,453) 

    radiusWidth: number | string;
    direction: string;
}
