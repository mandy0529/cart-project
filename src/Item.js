import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import React from 'react';
import {useGlobalContext} from './context';

const Item = ({id, title, price, img, amount}) => {
  const {deleteItem, plusItem, minusItem} = useGlobalContext();
  return (
    <section key={id} className="cart-item">
      <div className="cart-item-left">
        <img src={img} alt={title} />
        <div className="left-info">
          <h3>{title}</h3>
          <span className="price">${price}</span>
        </div>
      </div>
      <div className="change-control">
        <div className="control">
          <button className="arrow-btn">
            <IoIosArrowUp onClick={() => plusItem(id)} className="react-icon" />
          </button>
          <h3>{amount}</h3>
          <button className="arrow-btn">
            <IoIosArrowDown
              onClick={() => minusItem(id)}
              className="react-icon"
            />
          </button>
        </div>

        <button onClick={() => deleteItem(id)} className="remove-btn">
          remove
        </button>
      </div>
    </section>
  );
};

export default Item;
