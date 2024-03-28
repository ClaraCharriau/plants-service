import { IsNumber, IsString } from 'class-validator';

export class PlantDto {
  id: string;

  @IsString()
  name: string;

  @IsString()
  sunlight: string;

  @IsNumber()
  watering: number;

  @IsString()
  category: string;

  @IsString()
  imagePath: string;
}
