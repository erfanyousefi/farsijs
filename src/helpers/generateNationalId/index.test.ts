import { expect } from 'chai'
import { validateNationalId } from '../../validators/validateNationalId'
import { generateNationalId } from './index'

describe('generateNationalId', () => {
    const validNId = generateNationalId()
    const invalidNId = generateNationalId(false)

    it(`should validate valid generated National Id (${validNId})`, () => {
        expect(validateNationalId(validNId)).to.equal(true)
    })
    it(`should not validate invalid generated National Id (${invalidNId})`, () => {
        expect(validateNationalId(invalidNId)).to.equal(false)
    })
})
