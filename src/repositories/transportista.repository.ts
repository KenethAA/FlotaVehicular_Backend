import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Transportista, TransportistaRelations} from '../models';

export class TransportistaRepository extends DefaultCrudRepository<
  Transportista,
  typeof Transportista.prototype.id,
  TransportistaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Transportista, dataSource);
  }
}
