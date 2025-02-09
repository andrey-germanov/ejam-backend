import { IsInt, IsString, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(0)
  @Max(10)
  humilityscore: number;
}