const axios = require('axios')

const get = async () => {
    return await axios.get(`${process.env.GITHUB_API_URL}/users`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
        }
    })
}

module.exports = {
    get
}