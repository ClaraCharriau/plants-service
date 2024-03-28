import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<Plant[]> {
    const plants = await this.plantsRepository.find();
    if (plants.length === 0) {
      throw new NotFoundException('No plants were found');
    }
    return plants;
  }

  async findOne(id: string): Promise<Plant | null> {
    await this.throwIfNotExists(id);
    return await this.plantsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<string> {
    await this.throwIfNotExists(id);
    await this.plantsRepository.delete(id);
    return `Plant with id ${id} has been removed`;
  }

  async create(createPlantDto: PlantDto): Promise<Plant> {
    const plantId = createPlantDto.id;
    if (await this.plantsRepository.existsBy({ id: plantId }) && plantId != undefined && plantId != null) {
      throw new BadRequestException(`Plant with id : ${plantId} already exists`);
    }
    return await this.plantsRepository.save(createPlantDto);
  }

  async update(id: string, updatePlantDto: PlantDto): Promise<void> {
    await this.throwIfNotExists(id);
    await this.plantsRepository.update(id, updatePlantDto);
  }

  private async throwIfNotExists(id: string): Promise<void> {
    if (!(await this.plantsRepository.existsBy({ id }))) {
      throw new NotFoundException(`No plant with id : ${id} was found`);
    }
  }
}
