import 'dotenv/config';
import { Auth } from 'src/auth/entities/auth.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm/data-source';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'postgres',
  password: 'postgres',
  entities: [User, Auth],
  // entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
