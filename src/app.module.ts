import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsModule } from './foods/foods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [FoodsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Solin@281022',
    database: 'foodtruck',
    autoLoadEntities: true,
    synchronize: true,
  }), UsersModule, AuthModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
