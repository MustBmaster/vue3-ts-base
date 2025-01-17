/**
 * Checks if a given path is an external link.
 * @param path - The path to validate.
 * @returns True if the path is external (e.g., starts with http, mailto, or tel), otherwise false.
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * Validates if a given string is a valid URL.
 * @param url - The URL to validate.
 * @returns True if the URL is valid, otherwise false.
 */
export function validURL(url: string): boolean {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/(\$|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * Validates if a string contains only lowercase letters.
 * @param str - The string to validate.
 * @returns True if the string is all lowercase, otherwise false.
 */
export function validLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * Validates if a string contains only uppercase letters.
 * @param str - The string to validate.
 * @returns True if the string is all uppercase, otherwise false.
 */
export function validUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * Validates if a string contains only alphabets (both lowercase and uppercase).
 * @param str - The string to validate.
 * @returns True if the string is alphabetic, otherwise false.
 */
export function validAlphabets(str: string): boolean {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * Validates if a string is in email format.
 * @param email - The email to validate.
 * @returns True if the email is valid, otherwise false.
 */
export function validEmail(email: string): boolean {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * Checks if a value is a string.
 * @param str - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
export function isString(str: unknown): boolean {
  return typeof str === 'string' || str instanceof String
}

/**
 * Checks if a value is an array.
 * @param arg - The value to check.
 * @returns True if the value is an array, otherwise false.
 */
export function isArray(arg: unknown): boolean {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
