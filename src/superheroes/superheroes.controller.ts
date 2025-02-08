import { Controller, Get, Post, Body, Delete, NotFoundException, Param } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post('add')
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.create(createSuperheroDto);
  }
  @Delete(':id')
  deleteSuperhero(@Param('id') id: number) {
    const deleted = this.superheroesService.deleteSuperhero(id);
    if (!deleted) {
      throw new NotFoundException('Superhero not found');
    }
    return { message: 'Superhero deleted successfully' };
  }

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}