import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Main.css';

const Main = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="items-container ">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="cart-container border border-info">
                <h4>this is cart</h4>
            </div>
        </div>
    );
};

export default Main;