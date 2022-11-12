export function pokemonReducer(pokemon: any, action: any) {
    switch (action.type) {
        case 'init':
            return [...pokemon];
        case 'detail':
            return pokemon[0];
        default:
            throw Error('Unknown action: ' + action.type);
    }
}