import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from '../db/data-source';
import { User } from './user/entities/user.entity';
import { Auth } from './auth/entities/auth.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        database: 'postgres',
        password: 'postgres',
        entities: [User, Auth],
        // entities: ['dist/**/*.entity.js'],
        synchronize: true,
      },
      // dataSourceOptions,
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
