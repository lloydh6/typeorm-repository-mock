export class MockTypeORMRepository {
  readonly queryBuilderObject = {
    where: () => this.queryBuilderObject,
    update: () => this.queryBuilderObject,
    set: () => this.queryBuilderObject,
    returning: () => this.queryBuilderObject,
    execute: () => [],
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

  // findOne
  async findOne() {

  }
}