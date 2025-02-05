const { EntitySchema } = require("typeorm");

const Country = new EntitySchema({
    name: "Country",
    tableName: "countries",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
            nullable: false,
            length: 255,
        },
    },
});

module.exports = Country;
