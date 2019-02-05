
import { MockTypeORMRepository } from './testing.utilities'

describe('MockTypeORMRepository', () => {
  let mockRepository: MockTypeORMRepository

  beforeEach(() => {
    mockRepository = new MockTypeORMRepository()
  })

  describe('queryBuilderObject', () => {
    it('should construct the correct queryBuilderObject', () => {
      expect(mockRepository.queryBuilderObject).toBeDefined()
    })

    it('where', () => {
      const result = mockRepository.queryBuilderObject.where()
      expect(result).toBeDefined()
      expect(result).toBe(mockRepository.queryBuilderObject)
    })

    it('getMany', () => {
      const result = mockRepository.queryBuilderObject.getMany()
      expect(result).toBeDefined()
      expect(result).toEqual([])
    })
  })

  describe('createQueryBuilder', () => {
    it('should return queryBuilderObject', () => {
      const result = mockRepository.createQueryBuilder()
      expect(result).toBeDefined()
      expect(result).toBe(mockRepository.queryBuilderObject)
    })
  })
})