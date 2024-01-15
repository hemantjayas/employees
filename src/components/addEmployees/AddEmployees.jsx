import React, { useState } from 'react';
import './AddEmployees.css';
import { useDispatch } from 'react-redux';
import { AddEmployee } from '../../store/actions/addEmployees';

const AddEmployees = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        date_of_joining: '',
        department: 'Marketing',
        designation: 'manager',
        salary: '',
        status: "active"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateInputs = () => {
        const newErrors = {};

        // Simple validation: Check if required fields are not empty
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Invalid email format';
        }

        // Mobile validation
        const mobileRegex = /^\d{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile is required';
        } else if (!mobileRegex.test(formData.mobile.trim())) {
            newErrors.mobile = 'Invalid mobile number';
        }

        setErrors(newErrors);

        // Check if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleButtonClick = () => {
        if (validateInputs()) {
            console.log('Form Data:', formData);

            dispatch(AddEmployee(formData));

            setFormData({
                name: '',
                email: '',
                mobile: '',
                date_of_joining: '',
                department: 'Marketing',
                designation: 'manager',
                salary: '',
                status: 'active',
            });
        } else {
            // Show alert if validation fails
            window.alert('Please fill in all required fields with valid information.');
        }
    };

    return (
        <div className="employeesForm">
            <div>
                <h1>New Employees details</h1>
                <button onClick={handleButtonClick}>Add Employees</button>
            </div>

            <form>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile No.</label>
                    <input
                        type="number"
                        placeholder="Enter mobile number"
                        name="mobile"
                        id="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date of Joining</label>
                    <input
                        type="date"
                        name="date_of_joining"
                        id="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        value={formData.department}
                        onChange={handleInputChange}
                    >
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="IT">IT</option>
                        <option value="Accounts">Accounts</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="designation">Designation</label>
                    <select
                        name="designation"
                        id="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                    >
                        <option value="manager">Manager</option>
                        <option value="ca">CA</option>
                        <option value="Sales Executive">Sales Executive</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
                        placeholder="Enter Salary"
                        name="salary"
                        id="salary"
                        value={formData.salary}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Status</label>
                    <div>
                        <input
                            type="radio"
                            id="active"
                            name="status"
                            value="active"
                            checked={formData.status === 'active'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="active">Active</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="inactive"
                            name="status"
                            value="inactive"
                            checked={formData.status === 'inactive'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="inactive">Inactive</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEmployees;
