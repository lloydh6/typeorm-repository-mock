export class MockTypeORMRepository {
  readonly queryBuilderObject = {
    where: () => this.queryBuilderObject,
    getMany: () => []
  }

  // createQueryBuilder
  createQueryBuilder() {
    return this.queryBuilderObject
  }

  // insert
  async insert() {
    
  }

  // delete
  async delete() {
    
  }

  // find
  async find() {
    
  }
}