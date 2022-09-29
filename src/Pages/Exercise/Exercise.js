import React from 'react';
import './Exercise.css'
const Exercise = ({cart}) => {
    
    let totalTime = 0;
    for(const item of cart){
       const toParse = parseInt(totalTime)
       const toItem = parseInt(item.time);
       totalTime = toParse + toItem
    }

    return (
        <div>
            <h6 className='ms-3 fw-bold mb-3'>Exercise Details</h6>
            <div className=' total-time  bg-success bg-opacity-10  rounded'>
                <p className='text-muted fw-bold'>Exercise Time</p>
                <p>{ totalTime} <small>seconds</small></p>
            </div>
            <div className=' total-time  bg-success bg-opacity-10  rounded d-flex'>
                <p className='text-muted fw-bold'>Break Time</p>
                <p>00 <small>seconds</small></p>
            </div>
            <div className='mx-3 mt-5'>
                <button className='btn btn-primary w-100'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Exercise;