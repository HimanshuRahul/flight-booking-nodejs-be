const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();
// /api/v1/airports
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

// /api/v1/airports
router.get("/", AirportController.getAirports);

// /api/v1/airports/:id
router.get("/:id", AirportController.getAirport);

// /api/v1/airports/:id
router.delete("/:id", AirportController.destroyAirport);

module.exports = router;
