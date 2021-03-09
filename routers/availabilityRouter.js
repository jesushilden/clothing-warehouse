
const availabilityRouter = require('express').Router()
const availabilityController = require('../controllers/availabilityController')

availabilityRouter.get('/:manufacturer', availabilityController.getAvailability)

module.exports = availabilityRouter
