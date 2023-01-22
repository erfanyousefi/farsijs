/**
 * Generate Valid OR Invalid Iranian National Id
 * @param isValid (boolean) specify you want a valid national id or not default is true if you pass false it returns an invalid national id
 * @returns based on the input returns a valid on an invalid Iranian national id
 */
export function generateNationalId(isValid = true): string {
    const mainPart = Math.floor(Math.random() * 1e9).toString()
    let checksum: number = mainPart
        .split('')
        .reduce((res, el, idx) => res + +el * (10 - idx), 0)
    checksum %= 11
    checksum = checksum < 2 ? checksum : 11 - checksum

    if (!isValid) {
        checksum = (checksum + (Math.floor(Math.random() * 9) + 1)) % 10
    }

    return `${mainPart}${checksum}`
}
