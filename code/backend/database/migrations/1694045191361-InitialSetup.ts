import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSetup1694045191361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(
      `  CREATE TABLE IF NOT EXISTS "user" (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    name varchar(255) NOT NULL,
                    password varchar(255) NOT NULL,
                    email varchar(255) NOT NULL UNIQUE,
                    role varchar(255) NOT NULL,
                    cpf varchar(11) NOT NULL
                );
                  `,
    );

    await queryRunner.query(
        `  CREATE TABLE IF NOT EXISTS "car" (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    renavam varchar(255) NOT NULL,
                    year integer NOT NULL,
                    brand varchar(255) NOT NULL,
                    model varchar(255) NOT NULL,
                    license_plate varchar(11) NOT NULL,
                    is_rented boolean NOT NULL DEFAULT false
                );
                  `,
    );


  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS user');
  }
}
