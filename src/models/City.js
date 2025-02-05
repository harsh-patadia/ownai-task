const { EntitySchema } = require("typeorm");

const City = new EntitySchema({
    name: "City",
    tableName: "cities",
    columns: {
        id: { primary: true, type: "int", generated: true, }, country_id: { type: "int", nullable: false, },
        name: { type: "varchar", nullable: false, length: 255 }
    },
    relations: { country: { target: "Country", type: "many-to-one", joinColumn: { name: "country_id" }, onDelete: "CASCADE" }, },
});

module.exports = City;
