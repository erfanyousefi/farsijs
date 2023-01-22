/**
 * Validate Iranian National Id
 * @param str (string) Iranian National Id with english digits
 * @returns (boolean) whether valid or not
 */
export function validateNationalId(str: string): boolean {
    if (
        !str ||
        typeof str !== 'string' ||
        str.length !== 10 ||
        /^(.)\1*$/.test(str)
    )
        return false

    const mainPart = str.substring(0, 9)
    const checksum = str.substring(9)

    let result: number = mainPart
        .split('')
        .reduce((res, el, idx) => res + +el * (10 - idx), 0)
    result %= 11

    return (
        (result < 2 && +checksum === result) ||
        (result >= 2 && +checksum === 11 - result)
    )
}
