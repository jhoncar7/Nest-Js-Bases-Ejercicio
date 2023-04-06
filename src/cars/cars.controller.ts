import { Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, ParseUUIDPipe, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    // getCarById(@Param('id', ParseIntPipe) id: string) {
    getCarById(@Param('id', new ParseUUIDPipe({version:'4'})) id: string) {
        // console.log(+id);
        // return { car: this.cars[+id] };
        // return this.cars[+id];
        return this.carsService.findOneById(id);
        // return this.carsService.findOneById(Number(id));
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        // console.log(createCarDto);
        return {
            ok: true,
            method: 'POST',
            createCarDto
        }
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any) {
        console.log(body);
        return {
            ok: true,
            method: 'PATCH',
            body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {

        return {
            ok: true,
            method: 'DELETE',
            id
        }
    }
}
