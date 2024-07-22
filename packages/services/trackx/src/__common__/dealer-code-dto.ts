import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DealerCodeDto {
    @ApiProperty()
    @IsNotEmpty()
    dealerCode: string;
    userName: string
}