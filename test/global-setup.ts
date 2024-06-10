import { defaultOrmConfig } from '../src/database/database.module';
import { DataSource } from 'typeorm';

module.exports = async () => {
  console.log('log do bestinha');

  const datasource = new DataSource(defaultOrmConfig);
  await datasource.initialize();
  const DROP_DATABASE_BEFORE_SYNC = true;
  await datasource.synchronize(DROP_DATABASE_BEFORE_SYNC);
  await datasource.destroy();
};
