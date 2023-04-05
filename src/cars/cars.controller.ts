import { Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, Body } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
        getCarById(@Param('id') id: string) {
        // console.log(+id);
        // return { car: this.cars[+id] };
        // return this.cars[+id];
        return this.carsService.findOneById(id);
        // return this.carsService.findOneById(Number(id));
    }

    @Post()
    createCar(@Body() body: any) {
        console.log(body);
        return {
            ok: true,
            method: 'POST',
            body
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
