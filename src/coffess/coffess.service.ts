import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffessService {
  private coffess: Coffee[] = [
    {
      id: 1,
      name: 'sandeep',
      brand: 'star buks',
      flavours: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'second',
      brand: 'buks',
      flavours: ['chocolate', 'expresso'],
    },
    {
      id: 3,
      name: 'third',
      brand: 'CCD',
      flavours: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    const coffee = this.coffess.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffess.push(createCoffeeDto);
  }

  update(id: string, updateCoffeDto: any) {
    const existingCoffee = this.findOne(id);
  }

  remove(id: string) {
    const coffeIndex = this.coffess.findIndex((item) => item.id === +id);
    if (coffeIndex >= 0) {
      this.coffess.splice(coffeIndex, 1);
    }
  }
}
