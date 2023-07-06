# NestJS Tutorial 2023

## Getting start

```sh
npm i
npm run start:dev
npm run start:debug
```

### Lession 04

```sql
CREATE DATABASE `nestjs_tutorial_2023` CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin';
```

#### 1. Introduction to ORM

- Connect to MYSQL with Sequellize
- Connect to PostgreSQL with TypeORM
- Connect to MongoDB with Mongoose

**1.1. Connect to MYSQL with Sequellize**

Install required packages

```sh
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
npm install --save-dev @types/sequelize
npm install --save-dev sequelize-cli
npx sequelize-cli init
```

- [Sequelize Typescript](https://github.com/sequelize/sequelize-typescript)
- [Sequelize CLI](https://github.com/sequelize/cli/blob/main/docs/README.md)

Folder structure for sequelize-cli migration

```xss
src
    database
        config
            config.ts
    migrations
        *.ts
    seeds
        *.ts
```

```sh
# create migration
npx sequelize-cli migration:create --name create-pet-category-table --migrations-path ./src/database/migrations
# build
npm run build
# run migration
NODE_ENV=production npx sequelize-cli db:migrate --env production
# create seeds
npx sequelize-cli seed:generate --name pet-category
# run seeds
NODE_ENV=production npx sequelize-cli db:seed:all
```

> [defaultValue: Sequelize.UUIDV4 is not setting a default value on column in postgres](https://github.com/sequelize/sequelize/issues/13224)

```sh
npm i uuid --save
```
