const express = require("express");
const eventController = require("../controllers/eventController");
const { validateToken } = require("../authUtils");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/events", eventController.getAllEvents);
router.get("/events/user/:userId", eventController.getEventsByUserId);
router.get("/events/:eventId", eventController.getEventById);
router.post("/events", eventController.addEvent);
router.put("/events/:eventId", eventController.updateEvent);
router.delete("/events/:eventId", eventController.deleteEvent);
router.get('/users', userController.getAllUsers);

module.exports = router;
