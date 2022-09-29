import React, { useState } from 'react';
import './Exercise.css'
const Exercise = ({ cart }) => {
    

    let totalTime = 0;
    for (const item of cart) {
        const toParse = parseInt(totalTime)
        const toItem = parseInt(item.time);
        totalTime = toParse + toItem
    }
    const [breakTime, setBreakTime] = useState(0 )
    

    return (
        <div>
            <div>
                <h6 className='ms-3 fw-bold'>Add A Break</h6>
                <div className='timer  bg-success bg-opacity-10 m-3  rounded'>
                    <button > <span onClick={(e)=>setBreakTime(e.target.innerText)}>10</span><small>s</small></button>
                    <button ><span  onClick={(e)=>setBreakTime(e.target.innerText)}  >20</span><small>s</small></button>
                    <button><span  onClick={(e)=>setBreakTime(e.target.innerText)}  >30</span><small>s</small></button>
                    <button><span  onClick={(e)=>setBreakTime(e.target.innerText)}  >40</span><small>s</small></button>
                    <button><span  onClick={(e)=>setBreakTime(e.target.innerText)}  >50</span><small>s</small></button>
                </div>
            </div>
            <div>
                <h6 className='ms-3 fw-bold mb-3'>Exercise Details</h6>
                <div className=' total-time  bg-success bg-opacity-10  rounded'>
                    <p className='text-muted fw-bold'>Exercise Time</p>
                    <p>{totalTime} <small>seconds</small></p>
                </div>
                <div className=' total-time  bg-success bg-opacity-10  rounded d-flex'>
                    <p className='text-muted fw-bold'>Break Time</p>
                    <p>{breakTime}<small>seconds</small></p>
                </div>
                <div className='mx-3 mt-5'>
                    <button className='btn btn-primary w-100'>Activity Completed</button>
                </div>
            </div>

        </div>
    );
};

export default Exercise;