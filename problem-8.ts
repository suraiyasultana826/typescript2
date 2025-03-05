function validateKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): boolean {
    return keys.every(key => key in obj);
}