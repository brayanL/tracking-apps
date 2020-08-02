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

export const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'tours.json';
    link.href = url;
    link.click();
};
