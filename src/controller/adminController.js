const User = require("../models/User");
const Database = require("../../dbconfig/index");
const userRepo = Database.getRepository(User);

module.exports = {
    //admin api for user list view
    listUsers: async (req, resp) => {
        try {
            const { search, country, city } = req.query;

            // Check if user is admin
            if (resp.locals.userTokenData.role !== 1) {
                return resp.status(403).json({
                    success: false,
                    message: "Access Denied."
                });
            }

            const users = await userRepo
                .createQueryBuilder("user")
                .leftJoinAndSelect("cities", "city", "user.city = city.id")
                .leftJoinAndSelect("countries", "country", "user.country = country.id")
                .select([
                    "user.id as id", "user.name as name",
                    "user.email as email", "user.phone as phone",
                    "user.role as role", "city.name as city_name",
                    "city.id as city_id", "country.name as country_name",
                    "country.id as country_id",
                ]).where(search ? "(user.name LIKE :search OR user.email LIKE :search)" : "1=1", { search: `%${search}%` })
                .andWhere(country ? "user.country = :country" : "1=1", { country })
                .andWhere(city ? "user.city = :city" : "1=1", { city })
                .getRawMany();

            return resp.status(200).json({
                success: true,
                message: "user list fetched successfully",
                data: users
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

            if (loggedInUser.role !== 1) {
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
    }
};
