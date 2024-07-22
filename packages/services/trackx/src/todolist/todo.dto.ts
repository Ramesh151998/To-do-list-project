import { ApiProperty } from "@nestjs/swagger";



export class ToDoDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    task: string;

    @ApiProperty()
    description: string;


    @ApiProperty()
    isActive: boolean;
    
    @ApiProperty()
    createdUser: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedUser: string | null;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    versionFlag: number;
}