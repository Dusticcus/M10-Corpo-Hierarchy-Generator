const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return `<span class="material-icons">terminal</span> Employee`;
    }
}
module.exports = Engineer;