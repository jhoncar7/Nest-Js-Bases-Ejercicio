import { IsString } from "class-validator";


export class CreateCarDto {

    @IsString({message:'El parametro \'brand\' es obligatorio y es de tipo string'})
    readonly brand: string;

    @IsString()
    readonly model: string;
}