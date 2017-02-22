import APIBuilder from 'claudia-api-builder'
import echo from './handlers'

const api = new APIBuilder()

api.get('/', echo)

module.exports = api
