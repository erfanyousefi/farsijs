import { expect } from 'chai'
import { validateSheba } from '../../validators/validateSheba'
import { generateIBAN } from './index'

describe('generateNationalId', () => {
    it(`should return '' for 'XO`, () => {
        expect(generateIBAN('XO')).to.equal('')
    })

    it(`should return a valid IBAN for 'ir`, () => {
        expect(validateSheba(generateIBAN('ir'))).to.equal(true)
    })

    it(`should return a valid IBAN for 'IR'`, () => {
        expect(validateSheba(generateIBAN('IR'))).to.equal(true)
    })
})
