import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Transportista} from '../models';
import {TransportistaRepository} from '../repositories';

export class TransportistasController {
  constructor(
    @repository(TransportistaRepository)
    public transportistaRepository : TransportistaRepository,
  ) {}

  @post('/transportistas')
  @response(200, {
    description: 'Transportista model instance',
    content: {'application/json': {schema: getModelSchemaRef(Transportista)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transportista, {
            title: 'NewTransportista',
            exclude: ['id'],
          }),
        },
      },
    })
    transportista: Omit<Transportista, 'id'>,
  ): Promise<Transportista> {
    return this.transportistaRepository.create(transportista);
  }

  @get('/transportistas/count')
  @response(200, {
    description: 'Transportista model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Transportista) where?: Where<Transportista>,
  ): Promise<Count> {
    return this.transportistaRepository.count(where);
  }

  @get('/transportistas')
  @response(200, {
    description: 'Array of Transportista model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Transportista, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Transportista) filter?: Filter<Transportista>,
  ): Promise<Transportista[]> {
    return this.transportistaRepository.find(filter);
  }

  @patch('/transportistas')
  @response(200, {
    description: 'Transportista PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transportista, {partial: true}),
        },
      },
    })
    transportista: Transportista,
    @param.where(Transportista) where?: Where<Transportista>,
  ): Promise<Count> {
    return this.transportistaRepository.updateAll(transportista, where);
  }

  @get('/transportistas/{id}')
  @response(200, {
    description: 'Transportista model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Transportista, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Transportista, {exclude: 'where'}) filter?: FilterExcludingWhere<Transportista>
  ): Promise<Transportista> {
    return this.transportistaRepository.findById(id, filter);
  }

  @patch('/transportistas/{id}')
  @response(204, {
    description: 'Transportista PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transportista, {partial: true}),
        },
      },
    })
    transportista: Transportista,
  ): Promise<void> {
    await this.transportistaRepository.updateById(id, transportista);
  }

  @put('/transportistas/{id}')
  @response(204, {
    description: 'Transportista PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() transportista: Transportista,
  ): Promise<void> {
    await this.transportistaRepository.replaceById(id, transportista);
  }

  @del('/transportistas/{id}')
  @response(204, {
    description: 'Transportista DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.transportistaRepository.deleteById(id);
  }
}
