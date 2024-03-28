import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from './entities/plant.entity';
import { PlantDto } from './dto/plant.dto';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantsRepository: Repository<Plant>,
  ) {}

  findAll(): Promise<Plant[]> {
    return this.plantsRepository.find();
  }

  findOne(id: string): Promise<Plant | null> {
    return this.plantsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.plantsRepository.delete(id);
  }

  create(createPlantDto: PlantDto): void {
    this.plantsRepository.save(createPlantDto);
  }

  update(id: string, updatePlantDto: PlantDto): void {
    this.plantsRepository.update(id, updatePlantDto);
  }
}
