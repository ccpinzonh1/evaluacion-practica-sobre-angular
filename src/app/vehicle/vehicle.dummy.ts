import { faker } from '@faker-js/faker';
import { Vehicle } from './vehicle';

export const vehicles: Vehicle[] = [
  {
    id: faker.number.int(100),
    marca: faker.airline.airport().name,
    linea: faker.airline.airplane().name,
    referencia: faker.airline.airplane().iataTypeCode,
    modelo: faker.number.int({ min: 1900, max: 2024 }),
    kilometraje: faker.number.int(),
    color: faker.color.human(),
    imagen: faker.image.url(),
  },
  {
    id: faker.number.int(100),
    marca: faker.airline.airport().name,
    linea: faker.airline.airplane().name,
    referencia: faker.airline.airplane().iataTypeCode,
    modelo: faker.number.int({ min: 1900, max: 2024 }),
    kilometraje: faker.number.int(),
    color: faker.color.human(),
    imagen: faker.image.url(),
  },
  {
    id: faker.number.int(100),
    marca: faker.airline.airport().name,
    linea: faker.airline.airplane().name,
    referencia: faker.airline.airplane().iataTypeCode,
    modelo: faker.number.int({ min: 1900, max: 2024 }),
    kilometraje: faker.number.int(),
    color: faker.color.human(),
    imagen: faker.image.url(),
  },
];
