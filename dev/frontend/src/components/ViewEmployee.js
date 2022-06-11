import React, {Fragment, useState, useEffect} from "react";
import {Table } from 'antd';
import axios from 'axios';

const ViewEmployee = () => {

    const [dataSource, setDataSource] = useState([]);

    const getData = async () => {
        try {
            const data = await axios.get("http://localhost:5000/viewall");
            setDataSource(data.data);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const columns =[
        {
            key: '2',
            title: 'Employee Name',
            dataIndex: 'employee_name'
        },
        {
            key: '3',
            title: 'NIC Number',
            dataIndex: 'employee_nic'
        },
        {
            key: '4',
            title: 'Employee Gender',
            dataIndex: 'employee_gender'
        }
    ]
    return (
        <Fragment>
            <div className="viewall">
                <div className="divmain">
                    <h1>Employee Data</h1>
                    <Table
                        bordered = {true}
                        columns={columns}
                        dataSource={dataSource}
                        >    
                    </Table>
                </div>
            </div>
        </Fragment>
    )
}

export default ViewEmployee;