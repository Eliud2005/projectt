import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food) 
    private foodRepository: Repository<Food>,
  ) {}
  async create(createFoodDto: CreateFoodDto) {
    const food = this.foodRepository.create(createFoodDto);
    return await this.foodRepository.save(food);
  }

  async findAll() {
    const foods = await this.foodRepository.find();
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    //const food = await this.foodRepository.findOne({ where: { id } });
    if(!food) {
      throw new Error(`Food with id ${id} not found`);
    }
    return food; 
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new Error(`Food with id ${id} not found`);
    }
    const updatedFood =this.foodRepository.merge(food, updateFoodDto);
    return await this.foodRepository.save(updatedFood);
  }

 async remove(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new Error(`Food with id ${id} not found`);
    }
    await this.foodRepository.remove(food);
    return { message: `Food with id ${id} has been removed` };
  }
}
