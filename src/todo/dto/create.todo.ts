import { EnumState } from './../enum/enumState';
import { IsNotEmpty, IsEnum, IsString } from "class-validator";

export class CreateTodo{

    @IsString()
    activity: string;

    @IsNotEmpty()
    @IsEnum( EnumState, {
        message: `State invalid, valids options are COMPLETED or iNCOMPLETED`
    })
    state: string;
}