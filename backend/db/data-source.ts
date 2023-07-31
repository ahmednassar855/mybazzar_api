 import { DataSource , DataSourceOptions,  } from 'typeorm'
import { ConfigModule  , ConfigService} from '@nestjs/config'
import { config } from 'dotenv'
config()


 export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations:['dist/db/migrations/*{.ts,.js}'],
    logging: false,
 }

 const dataSource = new DataSource(dataSourceOptions);

 export default dataSource;
