CREATE DATABASE brandixassignment;

CREATE TABLE employee(
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(255),
    employee_nic VARCHAR(12),
    employee_gender VARCHAR(10)
);