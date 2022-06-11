import React, { useState } from 'react';

//import css
import '../App.css';
import 'antd/dist/antd.css';

import PWDValidatorMessage1 from './PWDValidatorMessage1';
import PWDValidatorMessage2 from './PWDValidatorMessage2';

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

//create 2 const form pasword validation
const [pwdRequisite, setPWDRequisite] = useState(false);
const [check, setCheck] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
});

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

//Regex password validator
const handleOnFocus = () => {
    setPWDRequisite(true);
}
const handleOnBlur = () => {
    setPWDRequisite(false)
}
const handleOnKeyUp = (e) => {
    const {value} = e.target;
    const capsLetterCheck = /[A-Za-z]/.test(value); //check for the letters in the input
    const numberCheck = /[0-9]/.test(value); //check for the numbers in the input
    const pwdLengthCheck = value.length >= 9 && value.length <= 12; //check for the input length

setCheck({
    capsLetterCheck,
    numberCheck,
    pwdLengthCheck,
    })
}
    return (
        <div className="addemployee">
            <div className='divmain'>
                <h1>Add Employee</h1>
                <Form> 
                    {/* Employee Add Form */}
                    <Form.Item label={<p style={{fontSize:"18px"}}>Employee Name : </p>} labelCol={{ span: 4 }}>
                        <Input type="text" value={employeeName} onChange={e => setEmployeeName(e.target.value)} onFocus = {handleOnFocus} onBlur = {handleOnBlur} onKeyUp = {handleOnKeyUp}/>
                        {pwdRequisite?<PWDValidatorMessage1 
                                            capsLetterFlag = {check.capsLetterCheck?"valid" : "invalid"}
                                        /> : null}
                    </Form.Item>
                    <Form.Item label={<p style={{fontSize:"18px"}}>NIC Number : </p>} labelCol={{ span: 4 }}>
                        <Input type="text" value={employeeNic} onChange={e => setEmployeeNic(e.target.value)} onFocus = {handleOnFocus} onBlur = {handleOnBlur} onKeyUp = {handleOnKeyUp}/>
                        {pwdRequisite?<PWDValidatorMessage2 
                                            numberFlag = {check.numberCheck?"valid":"invalid"}
                                            pwdLengthFlag = {check.pwdLengthCheck?"valid" : "invalid"}
                                        /> : null}
                    </Form.Item>
                        <span className="a">
                            <Form.Item label={<p style={{fontSize:"18px"}}>Gender : </p>} labelCol={{ span: 4 }} wrapperCol={{ span: 8 }}>
                                <Select onChange={onChange}>
                                    <Select.Option value="Male">Male</Select.Option>
                                    <Select.Option value="Female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                        </span>
                        <span className="a">
                            <Form.Item >
                                <Button size='large' type='primary' htmlType='submit' onClick={onSubmitForm}>Submit</Button>
                            </Form.Item>
                        </span>
                </Form>
            </div>
        </div>
    )
};

export default AddEmployee;