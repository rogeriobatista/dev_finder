const userService = require('../services/user')

module.exports =  async (req, res) => {
    const { data, headers } = await userService.get()
    res.send(response.data)
}