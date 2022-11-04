const controller = require('../controllers/flightsController')

const express = require('express')

const router = express.Router()

router.get('/', controller.getAllFlights)

router.post('/', controller.addFlight)

router.get('/:id', controller.getSingleFlight)

router.put('/:id', controller.updateFlight)

router.delete('/:id', controller.deleteFlight)

module.exports = router
