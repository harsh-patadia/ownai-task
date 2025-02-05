const jwt = require("jsonwebtoken");
const jwtSecret = "1234";

const authorization = async (req, resp, next) => {
    let userToken =
        req.body.authorization ||
        req.query.authorization ||
        req.headers["authorization"] ||
        req.headers["Authorization"];

        console.log("check if got token", userToken);
        
    if (!userToken) {
        return resp.status(401).json({
            success: false,
            message: "A token is required for authentication.",
        });
    }

    if (userToken.startsWith("Bearer ")) {
        userToken = userToken.split(" ")[1];
    }

    try {
        const decoded = jwt.verify(userToken, jwtSecret);
        resp.locals.userTokenData = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return resp.status(403).json({
                success: false,
                type: "token",
                message: "Token has expired. Please login again.",
            });
        }

        return resp.status(500).json({
            success: false,
            type: "token",
            message: "Invalid token. Authorization failed.",
            error: error.message,
        });
    }
};

module.exports = authorization;
