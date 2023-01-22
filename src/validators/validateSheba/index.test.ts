import { expect } from 'chai'
import { validateSheba } from './index'

type testCasesType = {
    inp: string
    res: boolean
}[]

const iranianTestCases: testCasesType = [
    { inp: '', res: false },
    { inp: 'IR012345678901234567890123', res: false },
    { inp: '580540105180021273113007', res: false },
    { inp: 'AL47212110090000000235698741', res: false },
    { inp: 'IR580540105180021273113007', res: true },
]

const otherTestCases: testCasesType = [
    { inp: '', res: false },
    { inp: 'AL47212110090000000235698741', res: true },
    { inp: 'BE68539007547034', res: true },
    { inp: 'BF1030134020015400945000643', res: true },
    { inp: 'IR580540105180021273113007', res: true },
]

describe('validateSheba', () => {
    iranianTestCases.forEach(({ inp, res }) => {
        it(`(JUST IRAN) should${!res ? ' not' : ''} validate ${inp}`, () => {
            expect(validateSheba(inp)).to.equal(res)
        })
    })
    otherTestCases.forEach(({ inp, res }) => {
        it(`(GLOBAL) should${!res ? ' not' : ''} validate ${inp}`, () => {
            expect(validateSheba(inp, true)).to.equal(res)
        })
    })
})
