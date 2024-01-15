import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../../store/actions/deleteEmployee'
import { FetchData } from '../../store/actions/FetchData'
import { selectEmployee } from '../../store/actions/updateEmployee'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const employeesData = useSelector((state) => state.data?.data)
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = employeesData?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


    const handleDelete = (id) => {
        dispatch(deleteData(id));
    };

    const handleEdit = (employeeId) => {
        dispatch(selectEmployee(employeeId))
        navigate("/addEmployees")
    };


    useEffect(() => {
        dispatch(FetchData())
    }, [])

    return (
        <div className='Home'>
            {employeesData?.map((item, index) => (
                <div key={index} className='cards'>
                    <p>{item.name}</p>
                    <p>{item.designation}</p>
                    <p>Email: {item.email}</p>
                    <p>mobile: {item.mobile}</p>
                    <p>department: {item.department}</p>
                    <p>DOJ: {item.date_of_joining}</p>
                    <p>DOJ: {item.date_of_joining}</p>
                    <p>Salary: {item.salary}</p>
                    <p>{item.status}</p>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Home
