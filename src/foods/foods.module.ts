import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsController } from './foods.controller';
import { Food } from './entities/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
