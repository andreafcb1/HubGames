export const typePokemon = (data) => {
    const nameTypeRepeat = [];
    data.forEach((element, index) => {
        element.type.forEach((singleType, index) => {
            !nameTypeRepeat.includes(singleType.type.name) && nameTypeRepeat.push(singleType.type.name);
        });
    });
    return nameTypeRepeat;
};