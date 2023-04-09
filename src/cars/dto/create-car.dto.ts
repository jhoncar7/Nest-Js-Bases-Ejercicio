import { IsString, MinLength } from "class-validator";


export class CreateCarDto {

    @IsString({message:'El parametro \'brand\' es obligatorio y es de tipo string'})
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}