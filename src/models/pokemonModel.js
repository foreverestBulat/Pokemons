class PokemonModel {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;

    }
}


class PokemonType{
    constructor(names) {
        if (Array.isArray(names)){
            this.names = names;
        }
    }
    types = {
        'normal': ['color', 'image'],
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': ''

    }
}
