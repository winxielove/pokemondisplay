class Type {
    constructor
        (name, uid) {
        this.name = name
        this.uid = uid
        this.weaknesses = []
        this.resistances = []
        this.immunities = []
    }
    addWeaknesses = (addition) => {
        if (typeof addition == Array) {
            this.weaknesses = this.weaknesses.concat(addition)
        } else if (typeof addition == String) {
            this.weaknesses.push(addition)
        }
        
        return (this.weaknesses)
    }
    removeWeaknesses = (removal) => {
        if (typeof removal == Array) {
            removal.forEach(e => {
                if (this.weaknesses.includes(e)) {
                    this.weaknesses = this.weaknesses.filter(function(a){return a !== e})
                }
            });
        } else if (typeof removal == String) {
            this.weaknesses = this.weaknesses.filter(function(a){return a !== removal})
        }
        
        return (this.weaknesses)
    }
    addResistances = (addition) => {
        if (typeof addition == Array) {
            this.resistances = this.resistances.concat(addition)
        } else if (typeof addition == String) {
            this.resistances.push(addition)
        }
        
        return (this.resistances)
    }
    removeResistances = (removal) => {
        if (typeof removal == Array) {
            removal.forEach(e => {
                if (this.resistances.includes(e)) {
                    this.resistances = this.resistances.filter(function(a){return a !== e})
                }
            });
        } else if (typeof removal == String) {
            this.resistances = this.resistances.filter(function(a){return a !== removal})
        }
        
        return (this.resistances)
    }
}

const Normal = new Type("Normal", "normal", ["fighting"], [], ["ghost"], [])

const Fire = new Type("Fire", "fire", ["water", "ground", "rock"], ["fire", "grass", "ice", "bug", "steel", "fairy"], ["e!burn"], [])

const Water = new Type("Water", "water", ["grass", "electric"], ["fire", "water", "ice", "steel"], [], [])

const Grass = new Type("Grass", "grass", ["fire", "ice", "poison", "flying", "bug"], ["water", "grass", "electric", "ground"], ["ma!powder", "m!leech_seed", "m!spore", "a!effect_spore"], [])

const Electric = new Type("Electric", "electric", ["ground"], ["flying, electric", "steel"], ["e!paralysis"], [])

const Ice = new Type("Ice", "ice", ["fire", "fighting", "rock", "steel"], ["ice"], ["e!frozen", "m!sheer_cold", "w!hail/damage"], ["[?snowing]>1.5attack*", "[?snowing]>1.5spattack*"])

const Fighting = new Type("Fighting", "fighting", ["flying", "psychic", "fairy"], ["bug", "rock", "dark"], [], [])

const Poison = new Type("Poison", "poison", ["ground", "psychic"], ["grass", "fighting", "poison", "bug", "fairy"], ["e!poison", "e!toxic", "mp!toxic"], ["_entered>arena.remove/toxic_spike"])

const Ground = new Type("Ground", "ground", ["water", "grass", "ice"], ["poison", "rock"], ["electric"], [])

const Flying = new Type("Flying", "flying", ["electric", "ice", "rock"], ["grass", "fighting", "bug"], ["ground"], [])

const Psychic = new Type("Psychic", "psychic", ["bug", "ghost", "dark"], ["fighting", "psychic"], [], [])

const Bug = new Type("Bug", "bug", ["fire", "flying", "rock"], ["grass", "fighting", "ground"], [], [])

const Rock = new Type("Rock", "rock", ["water", "grass", "ground", "fighting", "steel"], ["normal", "fire", "poison", "flying"], [], [])

const Ghost = new Type("Ghost", "ghost", ["ghost", "dark"], ["poison", "bug"], ["normal", "fighting"], ["imm>arena/trap"])

const Dark = new Type("Dark", "dark", ["fighting", "bug", "fairy"], ["ghost", "dark"], ["psychic"], [])

const Dragon = new Type("Dragon", "dragon", ["dragon", "ice", "fairy"], ["fire", "water", "grass", "electric"], [], [])

const Steel = new Type("Steel", "steel", ["fire", "fighting", "ground"], ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"], ["poison"], [])

const Fairy = new Type("Fairy", "fairy", ["poison", "steel"], ["fighting", "dark", "bug"], ["dragon"], [])


export default Types