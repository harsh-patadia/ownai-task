const Database = require("../../dbconfig/index");
const City = require("../models/City");
const Country = require("../models/Country");

const countryRepo = Database.getRepository(Country)
const cityRepo = Database.getRepository(City)


module.exports = {
    countryDropdown: async (req, resp) => {
        try {
            const country = await countryRepo.find();
            return resp.status(200).json({
                success: true,
                message: "country dropdown fetched",
                data: country
            });
        } catch (error) {
            return resp.status(500).json({
                success: false,
                message: "Server Error: something went wrong",
                error: error
            });
        }
    },

    cityDropdown: async (req, resp) => {
        try {
            const countryId = req.params.countryId;
            console.log(countryId);

            const city = await cityRepo.createQueryBuilder('city')
                .where(countryId ? 'city.country_id = :countryId' : '1=1', { countryId })
                .getRawMany();

            console.log("city", city);


            return resp.status(200).json({
                success: true,
                message: "city dropdown fetched",
                data: city
            });
        } catch (error) {
            return resp.status(500).json({
                success: false,
                message: "Server Error: something went wrong",
                error: error.message
            });
        }
    }
}