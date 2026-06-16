import {  IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name!: string; 
     @IsNotEmpty()
    @IsString()
    description!: string;
     @IsNotEmpty()
    @IsBoolean()
    active!: boolean;

}
