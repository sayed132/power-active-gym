import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name, img, age, desc, time} = props.item;
    
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className="item-info">
                <h3 className='h5'>{name}</h3>
                <small className='text-muted'>{desc}</small>
                <p className='fw-bold text-warning mt-2'>Age: {age}</p>
                <p className='text-info'>Time: {time}s</p>
            </div>
            <button  onClick={() => props.handleAddToList(props.item)}  className='w-100 border-0 btn btn-primary'>Add to list</button>
        </div>
    );
};

export default Item;