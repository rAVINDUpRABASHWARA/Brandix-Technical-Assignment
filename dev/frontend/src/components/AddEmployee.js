import React, { useState } from 'react';

//import css
import '../App.css';
import 'antd/dist/antd.css';

import {
    Button,
    Form,
    Input,
    Select
} from 'antd';


const AddEmployee = () => {

    const [employeeName, setEmployeeName] = useState("");
    const [employeeNic, setEmployeeNic] = useState("");
    const [employeeGender, setEmployeeGender] = useState();

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { employeeName, employeeNic, employeeGender };
            const response = await fetch("http://localhost:5000/create", {
                method: "POST",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });
            console.log(response);
            window.location.reload(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    const onChange = (value) => {
        setEmployeeGender(value);
    };

    return (
        <div className="addemployee">
            <div className='divmain'>
                <h1>Add Employee</h1>
                <Form>
                    <Form.Item label={<p style={{fontSize:"18px"}}>Employee Name : </p>} labelCol={{ span: 4 }}>
                        <Input type="text" value={employeeName} onChange={e => setEmployeeName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label={<p style={{fontSize:"18px"}}>NIC Number : </p>} labelCol={{ span: 4 }}>
                        <Input type="text" value={employeeNic} onChange={e => setEmployeeNic(e.target.value)}/>
                    </Form.Item>
                        <span className="a">
                            <Form.Item label={<p style={{fontSize:"18px"}}>Gender : </p>} labelCol={{ span: 4 }}>
                                <Select onChange={onChange}>
                                    <Select.Option value="Male">Male</Select.Option>
                                    <Select.Option value="Female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                        </span>
                        <span className="a">
                            <Form.Item >
                                <Button type='primary' htmlType='submit' onClick={onSubmitForm}>Submit</Button>
                            </Form.Item>
                        </span>
                </Form>
            </div>
        </div>
    )
};

export default AddEmployee;