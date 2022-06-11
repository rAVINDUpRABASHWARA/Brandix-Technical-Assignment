const Pool = require("pg").Pool;

//providing the postgreSQL database login details
const pool = new Pool({
    user: "postgres",
    password: "ravindu123",
    host: "localhost",
    post: "5432",
    database: "brandixassignment"
});

module.exports = pool;