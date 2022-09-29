import React from 'react';
import myLogo from '../../img/rafsan.png'
import './Personal.css'
const Personal = () => {
    return (
        <div className='cart-personal'>
            <div className='personal-info'>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <img src={myLogo} alt="" />
                    <div className='mt-3 ms-3 text-muted'>
                        <h5 className='mb-0 fw-bold '>Abu Sayed</h5>
                        <address><i class="fa-solid fa-location-dot me-1 text-info"></i>Barisal, Bangladesh</address>
                    </div>
                </div>
                <div className='d-flex align-items-center bg-success bg-opacity-10 justify-content-evenly p-1 rounded m-2'>
                    <div><p className='mb-0 fw-bold h4'>59<small className='text-muted h6'>kg</small></p>
                        <p className='text-muted'>Weight</p></div>
                    <div><p className='mb-0 fw-bold h4'>5.8</p>
                        <p className='text-muted'>Height</p></div>
                    <div><p className='mb-0 fw-bold h4'>23<small className='text-muted h6'>yrs</small></p>
                        <p className='text-muted'>Age</p></div>
                </div>
            </div>

        </div>
    );
};

export default Personal;