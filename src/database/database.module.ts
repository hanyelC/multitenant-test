import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from './snake-naming';
import { User } from '../modules/users/user.entity';
import { DataSourceOptions } from 'typeorm';

export const defaultOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  namingStrategy: new SnakeNamingStrategy(),
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  logging: true,
  entities: [User],
  synchronize: false,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...defaultOrmConfig,
      }),
    }),
  ],
})
export class DatabaseModule {}
