const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();
// /api/v1/flights
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

// /api/v1/flights?trips=DEL-MUM
router.get("/", FlightController.getAllFlights);

// /api/v1/flights/:id
router.get("/:id", FlightController.getFlight);

// /api/v1/flights/:id/seats
router.patch(
  "/:id/seats",
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
);

module.exports = router;
