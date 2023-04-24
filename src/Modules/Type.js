class Type {
    constructor
        (name, uid) {
        this.name = name
        this.uid = uid
        
        //type matchups
        this.weaknesses = []
        this.resistances = []
        this.immunities = []
        
        //used for special type effects, such as removing toxic spikes (poison types)
        this.effects = []
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
    addImmunities = (addition) => {
        if (typeof addition == Array) {
            this.immunities = this.immunities.concat(addition)
        } else if (typeof addition == String) {
            this.immunities.push(addition)
        }
        
        return (this.immunities)
    }
    removeImmunities = (removal) => {
        if (typeof removal == Array) {
            removal.forEach(e => {
                if (this.immunities.includes(e)) {
                    this.immunities = this.immunities.filter(function(a){return a !== e})
                }
            });
        } else if (typeof removal == String) {
            this.immunities = this.immunities.filter(function(a){return a !== removal})
        }
        
        return (this.immunities)
    }
    addEffects = (effect) => {
        //see 
    }
}

export default Type