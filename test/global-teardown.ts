import { defaultOrmConfig } from 'src/database/database.module';
import { DataSource } from 'typeorm';

module.exports = async () => {
  const datasource = new DataSource(defaultOrmConfig);
  await datasource.initialize();
  await datasource.dropDatabase();
  await datasource.destroy();
};
