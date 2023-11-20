import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();
    

    function handleSumit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {name, email})
        .then(res=> {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSumit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="" className='m-1'>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                            onChange={e=> setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="" className='m-1'>Email</label>
                        <input type='text' placeholder='Enter Email' className='form-control'
                            onChange={e=> setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success m-2'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent;
