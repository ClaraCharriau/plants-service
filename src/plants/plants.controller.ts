import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantDto } from './dto/plant.dto';
import { ValidationPipe } from 'src/validation/validation.pipe';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createPlantDto: PlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  @Get()
  findAll() {
    return this.plantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: PlantDto) {
    return this.plantsService.update(id, updatePlantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantsService.remove(id);
  }
}
