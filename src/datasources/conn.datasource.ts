import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conn',
  connector: 'mongodb',
  url: 'mongodb+srv://KenethAA:kenagui@cluster0.czebo.mongodb.net/fvehiculos',
  host: 'cluster0.czebo.mongodb.net',
  port: 27017,
  user: 'KenethAA',
  password: 'kenagui',
  database: 'fvehiculos',
  useNewUrlParser: true
};


@lifeCycleObserver('datasource')
export class ConnDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conn';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
