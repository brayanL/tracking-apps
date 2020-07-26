/**
 * Check if the object contain objects or arrays inside it. If the obj passed
 * is null or undefined also is considered like empty object.
 * */
export const checkEmptyObject = (object) => {
    if (Object.is(object, undefined) || Object.is(object, null)) {
        return true;
    }
    return Object.keys(object).length === 0;
};
