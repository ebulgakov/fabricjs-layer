/**
 * Look for object in array with an assumption that, in most cases, the object is at the end of the array
 *
 * @param target - Object to look for
 * @param array - Array to look into
 * @returns Index of object or -1
 */
export declare function getIndexOf<T>(target: T, array: T[]): number;
