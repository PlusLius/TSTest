jest.mock('../../app/doubles/OtherUtils', () => {
    return {
        calculateComplexity: () => {
            return 10
        },
        ...jest.requireActual('../../app/doubles/OtherUtils')
    }
})
jest.mock('uuid', () => {
    v4: () => '123'
})

import * as OtherUtils from '../../app/doubles/OtherUtils'

describe('module tests', () => {
    test('calclate complexity', () => {
        const result = OtherUtils.calculateComplexity({} as any)
        expect(result).toBe(10);
        
    })
    test('calclate complexity', () => {
        const result = OtherUtils.toUpperCase('abc')
        expect(result).toBe('ABC');
        
    })
    test('string with id', () => {
        const result = OtherUtils.toLowerCaseWithId('ABC')
        expect(result).toBe('abc123');
        
    })
})