const User = require("../models/User");
const Database = require("../../dbconfig/index");
const jwt = require("jsonwebtoken");
const { encryptPassword, verifyPassword } = require("../helpers");

const userRepo = Database.getRepository(User);

module.exports = {

    //user registration api 
    register: async (req, resp) => {
        try {
            let { name, email, password, phone, city, country } = req.body;
            const checkUser = await userRepo.findOneBy({ email });
            if (checkUser) {
                return resp.status(400).json({
                    success: false,
                    message: "Email already registered"
                });
            }

            password = await encryptPassword(password);
            const newUser = userRepo.create({
                name: name,
                email: email,
                password: password,
                phone: phone,
                city: city,
                country: country
            });

            await userRepo.save(newUser);
            return resp.status(201).json({ success: true, message: "User registered successfully", data: newUser });

        } catch (error) {
            return resp.status(500).json({
                success: false,
                message: "Server Error: something went wrong",
                error: error
            });
        }
    },

    //user login api
    login: async (req, resp) => {
        try {
            const { email, password } = req.body;
            const checkUser = await userRepo.findOneBy({ email });

            if (!checkUser) {
                return resp.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }
            let chkPass = await verifyPassword(password, checkUser.password);
            if (!chkPass) {
                return resp.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign({
                id: checkUser.id,
                role: checkUser.role
            },
                "1234",
                { expiresIn: "7d" });

            return resp.status(200).json({
                success: true,
                message: "Login successful login for 1 week",
                authorization: token
            });
        } catch (error) {
            return resp.status(500).json({
                success: false,
                message: "Server Error: something went wrong",
                error: error
            });
        }
    },

    //user detail view api
    viewUserDetail: async (req, resp) => {
        try {
            const userId = req.params.id;
            const loggedInUser = resp.locals.userTokenData;

            if (loggedInUser.role !== 1 && loggedInUser.id !== parseInt(userId)) {
                return resp.status(403).json({
                    success: false,
                    message: "Access Denied"
                });
            }

            const user = await userRepo.findOneBy({ id: userId });
            if (!user) {
                return resp.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }

            return resp.status(200).json({ success: true, user });
        } catch (error) {
            return resp.status(500).json({
                success: false,
                message: "Server Error: something went wrong",
                error: error
            });
        }
    },
};
