const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();
// /api/v1/airplanes
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

// /api/v1/airplanes
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id
router.get("/:id", AirplaneController.getAirplane);

// /api/v1/airplanes/:id
router.delete("/:id", AirplaneController.destroyAirplane);

module.exports = router;
