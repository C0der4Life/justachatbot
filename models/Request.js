module.exports = class Request {
  constructor (request) {
    console.log(request);
    this.request = request.substring(2, request.length);
    console.log(this.request);
    this.words = this.request.split(" ");
    console.log(this.words);

    this.command = this.words[0];

    /*
    if (this.words) {
      this.command = this.words[0].substring(1);
    } else {
      this.command = this.request;
    }
    */

    console.log(this.command);

      //first word minus the '$' prefix
    this.category = (this.words.length > 2) ? this.words[1] : undefined;
    this.query = (this.words.length > 2) ? this.words.slice(2, this.words.length).join(' ') : this.words.slice(1, this.words.length).join(' ');
  }

  validateCommand () {
    let validCommands = ['help', 'giphy', 'recipes', 'ffxiv', 'soundboard'];
    for (let i=0; i<validCommands.length; i++) {
      if (this.command == validCommands[i]) {
        return true;
      }
    }
    return false;
  }

}
