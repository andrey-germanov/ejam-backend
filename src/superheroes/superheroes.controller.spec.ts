import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('Superhero API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should add a new superhero (POST /superheroes)', async () => {
    const newHero = { name: 'Captain Humble', superpower: 'Kindness', humilityscore: 10 };

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(newHero)
      .expect(201);

    expect(response.body).toMatchObject(newHero);
    expect(response.body).toHaveProperty('id');
  });

  it('should fetch list sorted by humilityscore (GET /superheroes)', async () => {
    const response = await request(app.getHttpServer()).get('/superheroes').expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 1) {
      expect(response.body[0].humilityscore).toBeGreaterThanOrEqual(response.body[1].humilityscore);
    }
  });
});

