const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: { primary: true, type: "int", generated: true },
        name: { type: "varchar", nullable: false, length: 50 },
        email: { type: "varchar", unique: true, nullable: false, length: 100 },
        password: { type: "varchar", nullable: false },
        phone: { type: "varchar", length: 15, nullable: false },
        role: { type: "int", default: 2 },
        city: { type: "int", nullable: false },
        country: { type: "int", nullable: false },
        created_at: { type: "timestamp", default: () => "CURRENT_TIMESTAMP" },
    },
});

module.exports = User;
