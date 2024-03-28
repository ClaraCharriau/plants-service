import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  sunlight: string;

  @Column()
  watering: number;

  @Column()
  category: string;

  @Column({
    name: 'imagepath',
  })
  imagePath: string;
}
