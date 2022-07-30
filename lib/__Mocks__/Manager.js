module.exports = function() {
    this.name = 'Becky';
    this.officeNumber = Math.floor(Math.random() * 5 + 29 * 10);
    this.getRole = function(){
        return "Manager";
    }
};