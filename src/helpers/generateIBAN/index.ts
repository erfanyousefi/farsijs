import { countriesIBANInfo } from '../../validators/validateSheba/countries'

/**
 * Generate Valid IBAN with any valid prefix
 * @param prefix (string) the first 2 characters of IBAN. default is IR
 * @returns (string) Valid IBAN based on the input
 */
export function generateIBAN(prefix = 'IR'): string {
    const upperPrefix = prefix.toUpperCase()
    const countryInfo = countriesIBANInfo.find(
        (el) => el.name_code === upperPrefix,
    )
    if (!countryInfo) return ''

    const mainPartLength = countryInfo.len - 4
    const lenTenPart = Math.ceil(mainPartLength / 10)

    let mainPart = ''
    for (let index = 0; index < lenTenPart; index++) {
        mainPart += Math.floor(Math.random() * 1e10).toString()
    }
    mainPart = mainPart.substring(0, mainPartLength)

    let pureData = mainPart
    pureData += (upperPrefix.charCodeAt(0) - 65 + 10).toString()
    pureData += (upperPrefix.charCodeAt(1) - 65 + 10).toString()
    pureData += '00'

    const mod97 =
        pureData
            .match(/.{1,9}/g)
            ?.reduce((res, part) => (+`${res}${part}` % 97).toString(), '') ||
        '0'

    const result = `${upperPrefix}${('00' + (98 - +mod97).toString()).substring(
        2,
    )}${mainPart}`

    return result
}
