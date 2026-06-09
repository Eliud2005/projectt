import { IsNotEmpty, IsNumber,  IsString } from "class-validator";
import { IsNull } from "typeorm";

export class CreateFoodDto {
    @IsNotEmpty()
    @IsString()
    name!: string;
    @IsNotEmpty()
    @IsNumber()
    price!: number;
    @IsNotEmpty()
    @IsString()
    description!: string;
    @IsNotEmpty()
    @IsString()
    image!: string;
    @IsNotEmpty()
    @IsString()
    category!: string;

}
