Humble Superhero API

## Overview

The application allows users to add superheroes with a name, superpower, and humility score.

## Features

## Backend (NestJS)
[POST] /superheroes: Add a new superhero (name, superpower, and humility score required).
[GET] /superheroes: Fetch the list of superheroes sorted by humility score.
Uses [PostgreSQL] for persistent data storage.
Rate limiting to [prevent] abuse.
Error handling for better [debugging] and user experience.

## Installation

## Backend Setup
Clone the backend repository.

Install dependencies:
`npm install`
Configure PostgreSQL connection in .env.

Run the backend:
`npm run start`

## Collaboration Guidelines
1. Team Player Attitude
2. Discuss API changes or enhancements with backend teammates.
3. Maintain clear documentation for easy onboarding of new developers.
4. Write modular and maintainable code to allow future enhancements.

## If I Had More Time
1. Implement user authentication for personalized superhero management.
2. Write additional unit and integration tests for higher reliability.
3. Dockerization can be added later if needed

## Technologies Used
[Backend]: NestJS, PostgreSQL, TypeORM
[Testing]: Jest
[Deployment]: Railway.com
