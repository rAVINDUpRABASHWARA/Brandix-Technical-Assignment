const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json()); // req body

//ROUTES
//create a record

app.post("/create", async(req, res) => {
    try {
        const {
            employeeName,
            employeeNic,
            employeeGender
        } = req.body;

        const newEmployee = await pool.query("INSERT INTO employee (employee_name, employee_nic, employee_gender) VALUES ($1, $2, $3) RETURNING *", [employeeName, employeeNic, employeeGender ]);

        res.json(newEmployee.rows[0]);

        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
})

//get a record
app.get("/viewall", async(req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employee");
        res.json(allEmployees.rows); 
    } catch (error) {
        console.log(error.message);
    }
});

//delete a record is implemented temporarily to delete records easily using postman and no frontend implementation for the delete 
app.delete("/delete/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteEmployee = await pool.query("DELETE FROM employee WHERE employee_id = $1", [id]);
        res.json("The record is deleted");
    } catch (error) {
        console.log(error.message);
    }
});

const port  = 5000;
app.listen(port, () => {
    console.log(`Server is up and running in ${port} `);
});