let rnp = (user) => {
	 let self = this;
     this.perm = null;
     this.team = null;
     this.region = null;
     this.country = null;


    const check = () => {
        let result = true;

    	let has_perm = user.permissions.find(item => item.name == self.perm)
    	has_perm !== undefined ? has_perm = true : false

        self.team.forEach(function(teamItem) { user.services.find(item => item.name == teamItem) == undefined ? result = false : true })
        self.region.forEach(function(regionItem) { user.regions.find(item => item.name == regionItem) == undefined ? result = false : true })
        self.country.forEach(function(countryItem) { user.countries.find(item => item.name == countryItem) == undefined ? result = false : true })

        return result
    };

    return {
        can: function(x) {
            self.perm = x;
            return this;
        },
        inTeam: function(x) {
            self.team = x;
            return this;
        },
        inRegion: function(x) {
            self.region = x;
            return this;
        },
        inCountry: function(x) {
            self.country = x;
            return this;
        },
        exec: function() {
            return check();
        }
    }
}

module.exports = rnp;
