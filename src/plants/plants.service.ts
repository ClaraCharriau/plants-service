import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from './entities/plant.entity';

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

  // create(createPlantDto: CreatePlantDto) {
  //   return 'This action adds a new plant';
  // }

  // update(id: number, updatePlantDto: UpdatePlantDto) {
  //   return `This action updates a #${id} plant`;
  // }
}
