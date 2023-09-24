import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../entity/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  async createCar(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async getCarsNotRented(): Promise<Car[]> {
    return this.carRepository.find({ where: { is_rented: false } });
  }

  async rentACar(carId: string): Promise<void> {
    const car = await this.carRepository.findOne({ where: { id: carId } });
    if (car) {
      car.is_rented = true;
      await this.carRepository.save(car);
    }
  }
}
