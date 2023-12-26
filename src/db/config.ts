import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db4free.net',
  port: 3306,
  username: 'duacodeadmin',
  password: 'duacode1234',
  database: 'duacodedb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true 
};

export { dbConfig };
