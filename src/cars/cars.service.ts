import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    public findAll() {
        return this.cars;
    }

    public findOneById(id: string) {
        // agregar validacion del numero de arreglo que coincida
        const car = this.cars.find(car => car.id == id);

        if (!car)
            throw new NotFoundException(`El carro con el id ${id} no fue encontrado.`);
        // throw new BadRequestException(`El carro con el id ${id} no fue encontrado.`);

        return car;
    }

    create(createCarDto: CreateCarDto) {
        // create({ brand, model }: CreateCarDto) {

        // FORMAS DISTINTAS DE REALIZARLO
        // const car: Car = {
        //     id: uuid(),
        //     brand: createCarDto.brand,
        //     model: createCarDto.model,
        // }

        // const car: Car = {
        //     id: uuid(),
        //     model,
        //     brand,
        // }

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    public update(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findOneById(id);

        this.cars = this.cars.map(car => {

            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB;
            }

            return car;
        })

        return carDB;
    }

    public delete(id: string) {
        
        let carDB = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);

        return carDB;
    }
}