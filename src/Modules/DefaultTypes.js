import Type from "./Type"

const Normal = new Type("Normal", "normal")
Normal.addWeaknesses(["fighting"])
Normal.addResistances()
Normal.addImmunities(["ghost"])

const Fire = new Type("Fire", "fire")
Fire.addWeaknesses(["water", "ground", "rock"])
Fire.addResistances(["fire", "grass", "ice", "bug", "steel", "fairy"])
Fire.addImmunities(["e!burn"])

const Water = new Type("Water", "water")
Water.addWeaknesses(["grass", "electric"])
Water.addResistances(["fire", "water", "ice", "steel"])
Water.addImmunities()

const Grass = new Type("Grass", "grass")
Grass.addWeaknesses(["fire", "ice", "poison", "flying", "bug"])
Grass.addResistances(["water", "grass", "electric", "ground"])
Grass.addImmunities(["ma!powder", "m!leech_seed", "m!spore", "a!effect_spore"])

const Electric = new Type("Electric", "electric")
Electric.addWeaknesses(["ground"])
Electric.addResistances(["flying, electric", "steel"])
Electric.addImmunities(["e!paralysis"])

const Ice = new Type("Ice", "ice")
Ice.addWeaknesses(["fire", "fighting", "rock", "steel"])
Ice.addResistances(["ice"])
Ice.addImmunities(["e!frozen", "m!sheer_cold", "w!hail/damage"])

const Fighting = new Type("Fighting", "fighting")
Fighting.addWeaknesses(["flying", "psychic", "fairy"])
Fighting.addResistances(["bug", "rock", "dark"])
Fighting.addImmunities()

const Poison = new Type("Poison", "poison", ["_entered>arena.remove/toxic_spike"])
Poison.addWeaknesses(["ground", "psychic"])
Poison.addResistances(["grass", "fighting", "poison", "bug", "fairy"])
Poison.addImmunities(["e!poison", "e!toxic", "mp!toxic"])

const Ground = new Type("Ground", "ground")
Ground.addWeaknesses(["water", "grass", "ice"])
Ground.addResistances(["poison", "rock"])
Ground.addImmunities(["electric"])

const Flying = new Type("Flying", "flying")
Flying.addWeaknesses(["electric", "ice", "rock"])
Flying.addResistances(["grass", "fighting", "bug"])
Flying.addImmunities(["ground"])

const Psychic = new Type("Psychic", "psychic")
Psychic.addWeaknesses(["bug", "ghost", "dark"])
Psychic.addResistances(["fighting", "psychic"])
Psychic.addImmunities()

const Bug = new Type("Bug", "bug")
Bug.addWeaknesses(["fire", "flying", "rock"])
Bug.addResistances(["grass", "fighting", "ground"])
Bug.addImmunities()

const Rock = new Type("Rock", "rock")
Rock.addWeaknesses(["water", "grass", "ground", "fighting", "steel"])
Rock.addResistances(["normal", "fire", "poison", "flying"])
Rock.addImmunities()

const Ghost = new Type("Ghost", "ghost", ["imm>arena/trap"])
Ghost.addWeaknesses(["ghost", "dark"])
Ghost.addResistances(["poison", "bug"])
Ghost.addImmunities(["normal", "fighting"])

const Dark = new Type("Dark", "dark")
Dark.addWeaknesses(["fighting", "bug", "fairy"])
Dark.addResistances(["ghost", "dark"])
Dark.addImmunities(["psychic"])

const Dragon = new Type("Dragon", "dragon")
Dragon.addWeaknesses(["dragon", "ice", "fairy"],)
Dragon.addResistances(["fire", "water", "grass", "electric"])
Dragon.addImmunities()

const Steel = new Type("Steel", "steel")
Steel.addWeaknesses(["fire", "fighting", "ground"])
Steel.addResistances(["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"])
Steel.addImmunities(["poison"])

const Fairy = new Type("Fairy", "fairy")
Fairy.addWeaknesses(["poison", "steel"])
Fairy.addResistances(["fighting", "dark", "bug"])
Fairy.addImmunities(["dragon"])

export { 
    Normal, 
    Fire, 
    Water, 
    Grass, 
    Electric, 
    Ice, 
    Fighting, 
    Poison, 
    Ground, 
    Flying, 
    Psychic, 
    Bug, 
    Rock, 
    Ghost, 
    Dark, 
    Dragon, 
    Steel, 
    Fairy
}