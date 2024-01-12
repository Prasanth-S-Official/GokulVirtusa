const express = require("express");
const jobController = require("../controllers/jobController");
const { validateToken } = require("../authUtils");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/jobs", jobController.getAllJobs);
router.get("/jobs/user/:userId", jobController.getJobsByUserId);
router.get("/jobs/:jobId", jobController.getJobById);
router.post("/jobs", jobController.addJob);
router.put("/jobs/:jobId", jobController.updateJob);
router.delete("/jobs/:jobId", jobController.deleteJob);
router.get('/users', userController.getAllUsers);

module.exports = router;
