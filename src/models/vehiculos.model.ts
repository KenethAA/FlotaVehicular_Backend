import {Entity, model, property} from '@loopback/repository';
enum tipoVehiculo {
  Pickup = 'pickup',
  Camion = 'camion'
}

@model({settings: {strict: false}})

export class Vehiculos extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(tipoVehiculo),
    },
  })
  tipo: tipoVehiculo;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehiculos>) {
    super(data);
  }

}






export interface VehiculosRelations {
  // describe navigational properties here
}

export type VehiculosWithRelations = Vehiculos & VehiculosRelations;
