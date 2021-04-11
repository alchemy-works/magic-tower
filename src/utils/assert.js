export function assertIsTrue(condition, message = '') {
    if (!condition) {
        throw new Error(message)
    }
}

export function assertIsNumber(target, message = '') {
    if (typeof target !== 'number') {
        throw new Error(message)
    }
}