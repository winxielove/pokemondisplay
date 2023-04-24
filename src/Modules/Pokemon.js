class Pokemon {
    constructor
        (name,
        species,
        shiny = false,
        form = "none",
        level = 1,
        nature = "modest",
        ability,
        ivs = { hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0},
        evs = { hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0},
        moves = [{}]) {
            this.name = name
            this.species = species
    }
}

export default Pokemon