import { countriesIBANInfo } from './countries'

/**
 * Validate Sheba Number
 * @param str (string) Sheba number. It must starts with upper case country code
 * @param checkGlobal (boolean) default is false. If true it validates other countries IBAN
 * @returns (boolean) whether valid or not
 */
export function validateSheba(str: string, checkGlobal = false): boolean {
    if (!str || typeof str !== 'string') return false
    const countryCode = checkGlobal ? str.substring(0, 2) : 'IR'
    const countryInfo = countriesIBANInfo.find(
        (el) => el.name_code === countryCode,
    )
    if (
        !countryInfo ||
        str.length !== countryInfo.len ||
        !new RegExp(`^${countryCode}[0-9]{${countryInfo.len - 2}}$`).test(str)
    )
        return false

    let pureData: string = str.substring(4)
    pureData += str.charCodeAt(0) - 65 + 10
    pureData += str.charCodeAt(1) - 65 + 10
    pureData += str.substring(2, 4)

    const mod97: string | undefined = pureData
        .match(/.{1,9}/g)
        ?.reduce((res, part) => (+`${res}${part}` % 97).toString(), '')

    return mod97 === '1'
}
