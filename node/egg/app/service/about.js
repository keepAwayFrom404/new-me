'use strict'

const { Service } = require("egg")

class AboutService extends Service {
  async getGirls(id) {
    return {
      id,
      name: 'cadenli',
      age: 18
    }
  }
}

module.exports = AboutService