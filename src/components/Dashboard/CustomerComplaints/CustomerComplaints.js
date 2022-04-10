import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CustomerComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://pure-bastion-05518.herokuapp.com/complaints/${user.email}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>

        </div>
    );
};

export default CustomerComplaints;