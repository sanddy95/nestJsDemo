import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffessService } from './coffess.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffess')
export class CoffessController {
  constructor(private readonly coffessService: CoffessService) {}

  @Get()
  findAll(@Query() pagination) {
    const { limit, offset } = pagination;
    return this.coffessService.findAll();
  }

  @Get('fav')
  getHello(@Res() response) {
    response.status(200).send('this action retuns all with express');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffessService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffessService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
    return this.coffessService.update(id, UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffessService.remove(id);
  }
}
