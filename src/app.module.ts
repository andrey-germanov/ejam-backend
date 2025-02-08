import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from './superheroes/superhero.entity';

@Module({
  imports: [
    SuperheroesModule,
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 10 }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'superheroes',
      entities: [Superhero],
      synchronize: true,
    }),
  ],
})
export class AppModule {}