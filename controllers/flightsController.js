const {
    uuid
} = require("uuidv4");
const {
    flights
} = require("../models/flights");

const {
    vString,
    vNumber
} = require('./utility/validator')

exports.getAllFlights = async (req, res, next) => {
    try {
        const time = req.query.time
        let Flights = [...flights]
        if (time) Flights = Flights.filter(flight => flight.time === time)
        res.status(200).json({
            flights: Flights,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};

exports.getSingleFlight = async (req, res, next) => {
    try {
        const flightId = req.params.id;
        const flight = flights.find(flight => flightId === flight.id);
        if (!flight)
            return res.status(404).json({
                status: "failed",
                message: "flight not found",
            });
        res.status(200).json({
            data: flight,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};

exports.addFlight = async (req, res, next) => {
    try {
        const flight = await req.body;
        if (vString(flight.title) && vString(flight.time) && vString(flight.date) && vNumber(flight.price)) {
            flight.id = uuid();
            flights.push(flight);
            return res.status(200).json({
                status: "success",
                message: "flight added successfully",
                data: flight,
            });
        }
        res.status(400).json({
            status: "failed",
            message: "bad request",
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};

exports.updateFlight = async (req, res, next) => {
    try {
        const id = req.params.id;
        const flight = flights.find(flight => flight.id === id);
        if (!flight) {
            return res.status(404).json({
                status: "failed",
                message: "flight not found",
            });
        }
        const update = req.body;
        const updated = {};
        updated.title = update.title ? update.title : flight.title;
        updated.time = update.time ? update.time : flight.time;
        updated.price = update.price ? update.price : flight.price;
        updated.date = update.date ? update.date : flight.date;
        updated.id = flight.id;
        const index = flights.indexOf(flight);
        flights.splice(index, 1, updated);
        res.json({
            status: "succes",
            message: "flight updated succesfully",
            data: updated,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};

exports.deleteFlight = async (req, res, next) => {
    try {
        const id = req.params.id;
        const flight = flights.find(flight => flight.id === id);
        if (!flight) {
            return res.status(404).json({
                status: "failed",
                message: "flight not found",
            });
        }
        const index = flights.indexOf(flight);
        flights.splice(index, 1);
        res.status(200).json({
            status: "success",
            message: "flight deleted successfully",
            data: flight,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};