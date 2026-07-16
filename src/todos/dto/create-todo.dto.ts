import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string | undefined;
}
