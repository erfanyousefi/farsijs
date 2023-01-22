import { expect } from 'chai'
import { validateNationalId } from './index'

type testCasesType = {
    inp: string
    res: boolean
}[]

const testCases: testCasesType = [
    { inp: '', res: false },
    { inp: '5555555555', res: false },
    { inp: '0000000000', res: false },
    { inp: '0123401234', res: false },
    { inp: '0453404618', res: true },
    { inp: '0604348282', res: true },
]

describe('validateNationalId', () => {
    testCases.forEach(({ inp, res }) => {
        it(`should${!res ? ' not' : ''} validate ${inp}`, () => {
            expect(validateNationalId(inp)).to.equal(res)
        })
    })
})
