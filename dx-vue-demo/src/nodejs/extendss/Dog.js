const {Animal} = require("./Animal")

class Dog extends Animal {
  constructor() {
    super();
  }

  run() {
    console.log(`run...run.................`)
  }

}

module.exports = {Dog}
