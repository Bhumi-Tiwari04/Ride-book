const captainController = require('../controllers/captain.controller');

const express = require('express');
const router = express.Router();
const {body}=require("express-validator");
const authMiddleware=require('../middlewares/auth.middleware');


router.post('/register',[
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body("fullname.lastname").isLength({min:3}).withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:5}).withMessage("Password must be at least 5 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate number must be at least 3 characters long"),
    body("vehicle.type").isLength({min:3}).withMessage("Type must be at least 3 characters long"),
    body("vehicle.capacity").isNumeric().withMessage("Capacity must be a number")
],
captain.Controller.registerCaptain);

router.post('/login',[
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:5}).withMessage("Password must be at least 5 characters long")
],
captain.Controller.loginCaptain

)

router.get('/profile',authMiddleware,captainController.getCaptainProfile);
router.get('/logout',authMiddleware,captainController.logoutCaptain);
module.exports = router;