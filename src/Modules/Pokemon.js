/*

Pokemon are objects that hold data, along with what species and form the pokemon takes on

name takes on the displayed nickname of the pokemon. use "null" to define no nickname
species is a pokemon reference that gives information on how to retrieve a specific pokemon. is an object that is structured as follows:

{
    dex: "national", <- determines which dex to pull from
    id: 1, <- determines which dex # should be used for pulling
    name: "Bulbasaur" <- if an id is not given, the name is used as a searchable keyphrase against the dex.
}
form is a string or integer that is used to determine the form used in a given mon.
    passing "default" or -1 will result in the first form of the mon that is available.
    i.e, passing "default" onto a created vulpix will result in a kantonian vulpix, as that was the first one introduced

level is the level of a pokemon, in numbers 1-100.

nature is the nature of a pokemon, passed in as an object. syntax:
{
    name: "Modest",
    modifiers: [
        {
            stat: "spattack",
            factor: 1.1
        },
        {
            stat: "attack",
            factor: .9
        }
    ]
}

ability is either an integer or an ability passed on to the pokemon.
    integer inputs pull from the species' list of potential abilities [sorted alphabetically],
    whereas giving an ability will directly replace and override any species ability

ivs is an object containing the ivs, ranged 0-31
    these ivs can be one of the following
    spatk
    attack
    spdef
    defense
    speed
    hp

evs is an object containing the evs, ranged 0-252, that total up to =<510 EVs total among all stats.
    these evs can be one of the following
    spatk
    attack
    spdef
    defense
    speed
    hp

moves is a list of moves that the pokemon knows. Each move in the list is a Move object

shiny is a boolean that determines whether or not the pokemon is shiny
*/
class Pokemon {
    constructor
        (
        name = null,
        species = {
            dex: "national",
            id: 1,
            name: "Bulbasaur"
        },
        form = "default",
        level = 1,
        nature = {
            name: "Modest",
            modifiers: [
                {
                    stat: "spattack",
                    factor: 1.1
                },
                {
                    stat: "attack",
                    factor: .9
                }
            ]
        },
        ability = -1,
        ivs = { hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0},
        evs = { hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0},
        moves = [],
        shiny = false
        ) {
            this.name = name
            this.species = species
            this.form = form
            this.level = level
            this.nature = nature
            this.ability = ability
            this.ivs = ivs
            this.evs = evs
            this.moves = moves
            this.shiny = shiny
    }
}

export default Pokemon