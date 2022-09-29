import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='mt-5'>
            <h6 className='ms-3 fw-bold'>Add A Break</h6>
            <div className='timer  bg-success bg-opacity-10 m-3  rounded'>
                <p>10<small>s</small></p>
                <p>20<small>s</small></p>
                <p>30<small>s</small></p>
                <p>40<small>s</small></p>
                <p>50<small>s</small></p>
            </div>
        </div>
    );
};

export default Break;