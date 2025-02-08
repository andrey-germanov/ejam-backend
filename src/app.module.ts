import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from './superheroes/superhero.entity';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    SuperheroesModule,
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 10 }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Superhero],
      synchronize: true, // turn off if you use this in production
    }),
  ],
})
export class AppModule {}