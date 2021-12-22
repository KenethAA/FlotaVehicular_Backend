import {Entity, model, property} from '@loopback/repository';


enum licencias {
  Liviana = 'liviana',
  Pesada = 'pesada'
}

@model({settings: {strict: false}})
export class Transportista extends Entity {
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
  identidad: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(licencias),
    },
  })
  licencia: licencias;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transportista>) {
    super(data);
  }
}

export interface TransportistaRelations {
  // describe navigational properties here
}

export type TransportistaWithRelations = Transportista & TransportistaRelations;
