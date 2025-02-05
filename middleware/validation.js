const { body, validationResult } = require("express-validator");

// Middleware to handle validation errors
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    next();
};

const validateUserRegistration = [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Email format not valid"),
    body("password").isLength({ min: 6 }).withMessage("Password 6 characters long"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    validateRequest,
];

const validateUserLogin = [
    body("email").isEmail().withMessage("Email format not valid"),
    body("password").notEmpty().withMessage("Password is required"),
    validateRequest,
];

module.exports = { validateUserRegistration, validateUserLogin };
