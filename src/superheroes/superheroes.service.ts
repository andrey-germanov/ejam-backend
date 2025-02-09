import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from './superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
  constructor(
    @InjectRepository(Superhero)
    private superheroesRepository: Repository<Superhero>,
  ) {}

  async create(superheroDto: CreateSuperheroDto): Promise<Superhero> {
    const superhero = this.superheroesRepository.create(superheroDto);
    return this.superheroesRepository.save(superhero);
  }

  async deleteSuperhero(id: number): Promise<boolean> {
    const result = await this.superheroesRepository.delete(id);
    return result.affected > 0;
  }

  async findAll(): Promise<Superhero[]> {
    return this.superheroesRepository.find({ order: { humilityscore: 'DESC' } });
  }
}
